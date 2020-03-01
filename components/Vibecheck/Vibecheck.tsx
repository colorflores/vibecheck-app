import React from 'react';
import { View, TextInput, TouchableOpacity, Image, ScrollView, Text, Alert, Share, Keyboard } from 'react-native';
import { VibecheckInterfaceProps, VibecheckInterfaceState } from '../../interfaces/Vibecheck.interface';
import generalStyles from '../../styles/generalStyles';
import vibeCheckStyles from './Vibecheck.styles';
import SongCard from '../SongCard/SongCard';
import searchIcon from '../../assets/img/search_icon.png';
import Menu from '../Menu/Menu';
import { getData, saveData } from '../../util/Storage.util';
import mockResult from '../../mock/mockplaylist.json';
import saveSpotifyIcon from '../../assets/img/spotify_save.png';
import shareIcon from '../../assets/img/share_icon.png';
import { savePlaylist, sharePlaylist, getSongQuery } from '../../util/SpotifyAPI.util';

export default class Vibecheck extends React.Component<VibecheckInterfaceProps, VibecheckInterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      results: null,
      latestQuery: null,
      activeSong: null,
      signal: (origin: number) => {
        this.setState({ activeSong: origin })
      }
    }
  }

  async componentDidMount() {
    const latestQuery = await getData('LATEST_QUERY');
    const latestResult = await getData('LATEST_RESULT');

    if (latestQuery !== undefined) {
      this.setState({ query: latestQuery, latestQuery: latestQuery });
    }

    if (latestResult !== undefined) {
      this.setState({ results: JSON.parse(latestResult) })
    } else {
      const newResults = await getSongQuery(latestQuery);
      this.setState({ results: newResults});
      await saveData('LATEST_RESULT', JSON.stringify(newResults));
    }
  }

  vibecheck = async () => {
    const { query, latestQuery } = this.state;

    if (query !== latestQuery) {
      //? API calls go here 
      const songResults = await getSongQuery(query);
      await saveData('LATEST_RESULT', JSON.stringify(songResults));
      await saveData('LATEST_QUERY', query);

      this.setState({
        query: query,
        latestQuery: query,
        results: songResults
      });
    }
  }

  savePlaylist = async () => {
    const { query, results } = this.state;

    await savePlaylist(query, results);

    Alert.alert(
      'Vibecheck',
      'Your playlist has been saved to your Spotify account!',
      [{
        text: 'Done',
        style: 'default'
      }], { 
        cancelable: true
      }
    );
  }

  sharePlaylist = async () => {
    const { query, results } = this.state;

    const shareLink = await sharePlaylist(query, results);

    Share.share({
      message: `Check out this playlist I made with vibecheck! ${shareLink}`,
      url: `${shareLink}`,
      title: 'Share this playlist',
    }, {
      dialogTitle: 'Share this playlist',
      subject: 'Share this playlist I made with vibecheck!'
    })
  }

  handleInput = (tap) => {
    if (tap.nativeEvent.key == 'Enter'){
      Keyboard.dismiss();
      // this.vibecheck();
    }
  }

  render() {
    const { results, query, signal, activeSong } = this.state;
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Menu navigation={navigation} />
        <ScrollView style={vibeCheckStyles.vibecheckScroll}>
          <View style={vibeCheckStyles.vibecheckContainer}>
            <View style={vibeCheckStyles.vibecheckHeader}>
              <TextInput 
                onKeyPress={this.handleInput}  
                multiline={true} 
                style={[vibeCheckStyles.queryBox, generalStyles.queryText]} 
                value={query} 
                onChangeText={input => {
                  if (input[input.length - 1] !== '\n') {
                    this.setState({ query: input })                  }
                }}
              />
              <TouchableOpacity onPress={() => this.vibecheck()}>
                <View style={vibeCheckStyles.searchContainer}>
                  <View style={vibeCheckStyles.searchIconContainer}>
                    <Image source={searchIcon} style={vibeCheckStyles.searchIcon} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ width: '60%', flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center', height: 36, backgroundColor: 'black', marginTop: 30, elevation: 8, borderRadius: 10 }}>
              <Text style={{ color: 'white', fontFamily: 'worksans-light', fontStyle: 'normal', fontSize: 18 }}>
                shuffle playlist
              </Text>
            </TouchableOpacity>
            <View style={{ marginBottom: 30, flex: 1, flexDirection: 'column' }}>
              {(results) ? (
                results.map((song, index: number) => (
                  (<SongCard
                    key={index}
                    title={song.track_name} 
                    artist={song.artist_name} 
                    album={song.genre}
                    setActive={signal}
                    songId={song["track_id.1"]}
                    amIActive={activeSong}
                    listIdentifier={index}
                  />)
                ))
              ) : null}
            </View>
          </View>
        </ScrollView>
        <View style={{ height: 60, backgroundColor: 'black', flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this.savePlaylist()} style={{ width: '50%', height: '100%', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Image source={saveSpotifyIcon} style={{ height: 30, resizeMode: 'contain' }} />
            <Text style={[{ color: 'white', fontSize: 12, marginTop: 4, fontFamily: 'worksans-regular' }]}>
              Save to Spotify
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.sharePlaylist()} style={{ width: '50%', height: '100%', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Image source={shareIcon} style={{ height: 30, resizeMode: 'contain' }} />
            <Text style={[{color: 'white', fontSize: 12, marginTop: 4, fontFamily: 'worksans-regular' }]}>
              Share playlist
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}