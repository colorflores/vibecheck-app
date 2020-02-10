import React from 'react';
import {Text, View, Image,TouchableOpacity, Animated } from 'react-native';
import menuStyles from './Menu.styles';
import menuLogo from '../../assets/img/app_dark_logo.png';
import burger from '../../assets/img/menu.png';
import menuIcon from '../../assets/img/icon_menu.png';
import whiteDot from '../../assets/img/whitedot.png';
import purpleDot from '../../assets/img/purpledot.png';
import yellowDot from '../../assets/img/yellowdot.png';
import blueDot from '../../assets/img/bluedot.png';
import blackDot from '../../assets/img/blackdot.png';
import orangeDot from '../../assets/img/orangedot.png';


import { MenuInterfaceProps, MenuInterfaceState } from '../../interfaces/Menu.Interface';

const emptyState = {
  showDropBox: false,
  animation: new Animated.Value(0)

}

const menuItem = (navFunction, target, dotSrc, text) => (
  <View style={menuStyles.elementMargin}>
    <TouchableOpacity onPressIn={() => navFunction('Profile')} style={menuStyles.option}>
      <Image style={menuStyles.dotStyle} source={dotSrc} />
      <Text style={menuStyles.text}>{text}</Text>
    </TouchableOpacity>
  </View>
)

const menuItems = {
  'vibecheck': yellowDot,
  'Playlist check': whiteDot,
  'Your playlists': blackDot,
  'Your profile': blueDot,
  'About us': purpleDot,
  'Log out': orangeDot,
};

Animated.timing(emptyState.animation, {
  toValue : 1,
  duration : 6000
}).start();

if(emptyState.showDropBox==true){ emptyState.animation.setValue(0)}


export default class Menu extends React.Component<MenuInterfaceProps,MenuInterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      ...emptyState
    }
  };
  
  changeContent = () =>{ 
    const { hideContent } = this.props;

    this.setState({ 
      showDropBox: !this.state.showDropBox
    })

    if(this.props.hideContent){
      hideContent() 
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    const {showDropBox} = this.state;
    const {animation} = this.state;
    return (
      <View style={menuStyles.menuActive}>
        <View style={menuStyles.upperActive}>
          <TouchableOpacity onPressIn={this.changeContent}>
            <Image style={{ width:50, resizeMode: 'contain' }} source={burger} />
          </TouchableOpacity>
          <Image style={{ width:180, resizeMode: 'contain' }} source={menuLogo} />
          <Image style={{ position: 'absolute', width:45, resizeMode: 'contain', left: 270}} source={menuIcon} />
        </View>
           {showDropBox? <Animated.View style={[{opacity: animation}, menuStyles.body]}>
            <View style={menuStyles.menuContainer}>
              {Object.keys(menuItems).map((currItem) => (
                menuItem(navigate, 'Profile', menuItems[currItem], currItem) // replaces profile with currItem for unique page
              ))}
            </View>
          </Animated.View> : null }                                                
    </View>
    );
  }
}



