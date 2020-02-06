import React from 'react';
import { View, TextInput, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import { LoginInterfaceProps, LoginInterfaceState } from '../../interfaces/Login.interface';
import generalStyles from '../../styles/generalStyles';
import LoginStyles from './Login.styles';
import { getAuthCode } from '../../util/Spotify.util';

export default class Login extends React.Component <LoginInterfaceProps, LoginInterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      authCode: ''
    };
  }

  handleLogin = async () => {
    const tempCode = getAuthCode();
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
