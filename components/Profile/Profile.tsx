import React from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import profileStyles from './Profile.styles';
import landingLogo from '../../assets/img/app_dark_logo.png';
import profileLogo from '../../assets/img/icon_menu.png';
import personLogo from '../../assets/img/profile_icon.png';



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
      <View style={profileStyles.profile}>
        <View style={[profileStyles.profileContainer]}>
            <Text style={profileStyles.text}>[Insert Name]'s Vibe</Text>  
        </View>
        <Text style={profileStyles.text}>[Insert Vibes Above]</Text>
        <Image style={{ position: 'absolute', bottom: 80, width:200, height: 1000, resizeMode: 'contain' }} source={landingLogo} />
        <Image style={{ position: 'absolute', bottom: 80, width:50, height: 1000, right: 0, resizeMode: 'contain' }} source={profileLogo} />
        <Image style={{ position: 'absolute', width:200, height: 350, right: 80, resizeMode: 'contain' }} source={personLogo} />
      </View>
    );
  }
}
