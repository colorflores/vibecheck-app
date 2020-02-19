import React from 'react';
import { View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { VibecheckInterfaceProps, VibecheckInterfaceState } from '../../interfaces/Vibecheck.interface';
import generalStyles from '../../styles/generalStyles';
import vibeCheckStyles from './Vibecheck.styles';
import SongCard from '../SongCard/SongCard';
import searchIcon from '../../assets/img/search_icon.png';
import Menu from '../Menu/Menu';

export default class Vibecheck extends React.Component<VibecheckInterfaceProps, VibecheckInterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      query: props.navigation.state.params.query,
      results: props.navigation.state.params.results.songs,
      activeSong: null,
      signal: (origin: number) => {
        this.setState({ activeSong: origin })
      }
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
              <TouchableOpacity>
                <View style={vibeCheckStyles.searchContainer}>
                  <View style={vibeCheckStyles.searchIconContainer}>
                    <Image source={searchIcon} style={vibeCheckStyles.searchIcon} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {(results && query) ? (
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
            ) : ''}
          </View>
        </ScrollView>
      </View>
    )
  }
}