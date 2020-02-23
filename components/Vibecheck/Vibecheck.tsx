import React from 'react';
import { View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { VibecheckInterfaceProps, VibecheckInterfaceState } from '../../interfaces/Vibecheck.interface';
import generalStyles from '../../styles/generalStyles';
import vibeCheckStyles from './Vibecheck.styles';
import SongCard from '../SongCard/SongCard';
import searchIcon from '../../assets/img/search_icon.png';
import Menu from '../Menu/Menu';
import { getData, saveData } from '../../util/Storage.util';
import mockResult from '../../mock/mockplaylist.json';

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
    let latestResults = null;

    if (latestQuery !== undefined) {
      this.setState({
        query: latestQuery,
        latestQuery,
      });

      latestResults = await getData('LATEST_RESULT');

      console.log(latestResults);

      if (latestResults !== undefined) {
        this.setState({
          results: JSON.parse(latestResults).songs,
        });
      } else {
        //? If latest data doesn't exist call api and save those results
        await saveData('LATEST_RESULT', JSON.stringify(mockResult))
        this.setState({
          results: mockResult.songs
        })
      }
    }
  }

  vibecheck = async () => {
    const { query, latestQuery } = this.state;

    if (query !== latestQuery) {
      //? API calls go here 
      // await saveData("LATEST_RESUT", someapiresult);

      await saveData('LATEST_QUERY', query);

      this.setState({
        latestQuery: query,
      });
    }
  }

  render() {
    const { results, query, signal, activeSong } = this.state;
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Menu navigation={navigation} />
        <ScrollView style={vibeCheckStyles.vibecheckScroll}>
          <View style={vibeCheckStyles.vibecheckContainer}>
            <View style={vibeCheckStyles.vibecheckHeader}>
              <TextInput style={[vibeCheckStyles.queryBox, generalStyles.queryText]} value={query} onChangeText={input => {this.setState({ query: input })}} />
              <TouchableOpacity onPress={() => this.vibecheck()}>
                <View style={vibeCheckStyles.searchContainer}>
                  <View style={vibeCheckStyles.searchIconContainer}>
                    <Image source={searchIcon} style={vibeCheckStyles.searchIcon} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {(results) ? (
              results.map((song, index: number) => (
                (<SongCard
                  key={index}
                  title={song.track_name} 
                  artist={song.artist_name} 
                  album={song.genre}
                  setActive={signal}
                  songId={song.track_id}
                  amIActive={activeSong}
                  listIdentifier={index}
                />)
              ))
            ) : null}
          </View>
        </ScrollView>
      </View>
    )
  }
}