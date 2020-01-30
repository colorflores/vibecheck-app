import React from 'react';
import { Text, View,Image } from 'react-native';
import loadingStyles from './Loading.styles';
import splashLogo from '../../assets/img/app_dark_logo.png';
import loadingLogo from '../../assets/img/loading_logo.png';
import generalStyles from '../../styles/generalStyles';

export default class Profile extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {
      query: '',
    };
  }

  updateText = () => {
    // this.setState({
    //   query: 'random'
    // });
  }

  checkVibe = () => {

}

  render() {
    return (
      <View style={loadingStyles.loading}>
        <View style={loadingStyles.loadingContainer}>
          <Image style={[{ height: 200, resizeMode: 'contain'}, loadingStyles.elementMargin]} source={loadingLogo} />
          <Text style={loadingStyles.title}> Signing you in...</Text>
        </View>
        <Image style={generalStyles.bottomDarkLogo} source={splashLogo} />
      </View>
      
    );
  }
}
