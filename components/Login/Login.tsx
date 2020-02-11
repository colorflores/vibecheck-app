import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LoginInterfaceProps, LoginInterfaceState } from '../../interfaces/Login.interface';
import generalStyles from '../../styles/generalStyles';
import loginStyles from './Login.styles';
import loginLogo from '../../assets/img/login_logo.png'
import bottomLogo from '../../assets/img/app_dark_logo.png';
import { getAuthTokens } from '../../util/Spotify.util';
import { getData } from '../../util/Storage.util';

const wait = async (time) => (
  new Promise((resolve) => {
    setTimeout(() => {
      return resolve('');
    }, time);
  })
)

export default class Login extends React.Component <LoginInterfaceProps, LoginInterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      accessTokenStatus: false,
    };
  }

  handleLogin = async () => {
    const { navigate } = this.props.navigation

    await getAuthTokens();
    const testToken = await getData('ACCESS_TOKEN');
    console.log(testToken);

    await wait(2000);

    if (testToken) {
      navigate('Landing');
    }
  }

  render() {
    const { accessTokenStatus } = this.state;

    return (
      <View style={loginStyles.loginContainerOuter}>
        <View style={loginStyles.loginContainerInner}>
          <Image style={loginStyles.loginLogo} source={loginLogo}/>
          <TouchableOpacity onPress={this.handleLogin} style={loginStyles.loginButton}>
            <Text style={[generalStyles.queryText, loginStyles.loginText]}>
              Log in with Spotify
            </Text>
          </TouchableOpacity>
          <Text style={{ color: 'white' }}>
            {accessTokenStatus === true ? 'active' : 'not active'}
          </Text>
        </View>
        <Image style={generalStyles.bottomDarkLogo} source={bottomLogo} />
      </View>
    );
  }
}
