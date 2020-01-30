import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { VibecheckInterfaceProps, VibecheckInterfaceState } from '../../interfaces/Vibecheck.interface';
import vibeCheckStyles from './Vibecheck.styles';
import generalStyles from '../../styles/generalStyles';

export default class Vibecheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View>
        <Text>Vibecheck yo</Text>
      </View>
    )
  }
}