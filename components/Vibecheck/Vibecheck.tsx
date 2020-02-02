import React from 'react';
import { View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { VibecheckInterfaceProps, VibecheckInterfaceState } from '../../interfaces/Vibecheck.interface';
import generalStyles from '../../styles/generalStyles';
import vibeCheckStyles from './Vibecheck.styles';
import SongCard from '../SongCard/SongCard';
import searchIcon from '../../assets/img/search_icon.png';

export default class Vibecheck extends React.Component<VibecheckInterfaceProps, VibecheckInterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      query: props.navigation.state.params.query,
      results: props.navigation.state.params.results.songs,
    }
  }

  render() {
    const { results, query } = this.state;

    return (
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
            results.map((song) => (
              (<SongCard
                key={song.track_id}
                title={song.track_name} 
                artist={song.artist_name} 
                album={song.genre}
                controlURI="test"
              />)
            ))
          ) : ''}
          <View style={vibeCheckStyles.bottomLine} />
        </View>
      </ScrollView>
    )
  }
}