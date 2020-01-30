import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { VibecheckInterfaceProps, VibecheckInterfaceState } from '../../interfaces/Vibecheck.interface';
import vibeCheckStyles from './Vibecheck.styles';
import generalStyles from '../../styles/generalStyles';

export default class Vibecheck extends React.Component<VibecheckInterfaceProps, VibecheckInterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      query: props.navigation.state.params.query,
      results: props.navigation.state.params.results.songs,
    }
    // console.log(this.state);
  }

  render() {
    const { results } = this.state;

    return (
      <View>
        {results.map((song) => (
          (<View>
            <Text>
              {song.track_name}
            </Text>
          </View>)
        ))}
      </View>
    )
  }
}