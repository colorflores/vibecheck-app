import React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import menuStyles from './Menu.styles';
import menuLogo from '../../assets/img/app_dark_logo.png';
import menuIcon from '../../assets/img/icon_menu.png';

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
    const {navigate} = this.props.navigation;
    return (
      <View style={menuStyles.menuActive}>
        <View style={menuStyles.upperActive}>
          <Image style={{ width:50, resizeMode: 'contain' }} source={menuIcon} />
          <Image style={{ width:180, resizeMode: 'contain' }} source={menuLogo} />
          {/* <Image style={{ position: 'absolute', width:50, resizeMode: 'contain', right: 0, top: 0 }} source={menuIcon} /> */}
        </View>

        <View style={menuStyles.body}>
          <View style={menuStyles.menuContainer}>
            <View style={[menuStyles.circle1, menuStyles.elementMargin]}>
                <TouchableOpacity onPressIn={() => navigate('Profile')} style={menuStyles.option}>
                  <Text style={menuStyles.text}>vibecheck</Text>
                </TouchableOpacity>
            </View>
            <View style={[menuStyles.circle2, menuStyles.elementMargin]}>
                <TouchableOpacity onPressIn={() => navigate('Profile')} style={menuStyles.option}>
                  <Text style={menuStyles.text}>Playlist check</Text>
                </TouchableOpacity>
            </View>
            <View style={[menuStyles.circle3, menuStyles.elementMargin]}>
                <TouchableOpacity onPressIn={() => navigate('Profile')} style={menuStyles.option}>
                  <Text style={menuStyles.text}>Your playlists</Text>
                </TouchableOpacity>
            </View>
            <View style={[menuStyles.circle4, menuStyles.elementMargin]}>
                <TouchableOpacity onPressIn={() => navigate('Profile')} style={menuStyles.option}>
                  <Text style={menuStyles.text}>Your profile</Text>
                </TouchableOpacity>
            </View>
            <View style={[menuStyles.circle5, menuStyles.elementMargin]}>
                <TouchableOpacity onPressIn={() => navigate('Profile')} style={menuStyles.option}>
                  <Text style={menuStyles.text}>About us</Text>
                </TouchableOpacity>
            </View>
            <View style={[menuStyles.circle6, menuStyles.elementMargin]}>
                <TouchableOpacity onPressIn={() => navigate('Profile')} style={menuStyles.option}>
                  <Text style={menuStyles.text}>Log out</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

