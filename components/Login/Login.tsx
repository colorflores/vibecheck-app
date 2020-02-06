import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LoginInterfaceProps, LoginInterfaceState } from '../../interfaces/Login.interface';
import generalStyles from '../../styles/generalStyles';
import LoginStyles from './Login.styles';
import { getAuthCode } from '../../util/Spotify.util';
import loginLogo from '../../assets/img/login_logo.png'
import landingLogo from '../../assets/img/app_dark_logo.png';
import constants from '../../styles/constats';
import colors from '../../styles/colors';

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
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignContent: 'center', backgroundColor: colors.black }}>
        <View style={{ flex: 1, width: '85%', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center'  }}>
          <Image style={{ width: 260, height: 260 , resizeMode: 'contain', marginBottom: 25 }} source={loginLogo}/>
          <TouchableOpacity onPress={this.handleLogin} style={{ borderColor: colors.green, borderWidth: constants.borderWidth, paddingTop: 10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20 }}>
            <Text style={[generalStyles.queryText, { color: colors.white }]}>
              Log in with Spotify
            </Text>
          </TouchableOpacity>
        </View>
        <Image style={generalStyles.bottomDarkLogo} source={landingLogo} />
      </View>
    );
  }
}
