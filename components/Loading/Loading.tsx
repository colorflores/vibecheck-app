import React from 'react';
import axios from 'axios';
import { View, TextInput, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import { LoadingInterfaceProps, LoadingInterfaceState } from '../../interfaces/Loading.interface';
import generalStyles from '../../styles/generalStyles';
import LoadingStyles from './Loading.styles';
import { getAuthorizationCode } from '../../util/Spotify.util';

export default class Loading extends React.Component <LoadingInterfaceProps, LoadingInterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      authCode: ''
    };
  }

  handleLogin = () => {
    const tempCode = getAuthorizationCode();
    console.log(tempCode);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <Button title="Log in" onPress={click => this.handleLogin()}/>
      </View>
    );
  }
}