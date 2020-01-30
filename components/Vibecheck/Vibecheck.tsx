import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { VibecheckInterfaceProps, VibecheckInterfaceState } from '../../interfaces/Vibecheck.interface';
import SongCard from '../SongCard/SongCard';
import vibeCheckStyles from './Vibecheck.styles';
import generalStyles from '../../styles/generalStyles';
import colors from '../../styles/colors';

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
      <ScrollView style={{ flex: 1, backgroundColor: colors.yellow }}>
        <View style={{ alignContent: 'center', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <View style={{ width: '80%', marginTop: 30, marginBottom: 30 }}>
            <TextInput style={[generalStyles.queryText, vibeCheckStyles.queryBox]} value={query} />
          </View>
          {results.map((song) => (
            (<SongCard
              title={song.track_name} 
              artist={song.artist_name} 
              album={song.genre}
            />)
          ))}
          <View style={vibeCheckStyles.bottomLine} />
        </View>
      </ScrollView>
    )
  }
}