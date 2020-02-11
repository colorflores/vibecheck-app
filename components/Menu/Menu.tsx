import React from 'react';
import { Text, View, Image,TouchableOpacity, Animated } from 'react-native';
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
  <View style={menuStyles.elementMargin} key={`${text}-id`}>
    <TouchableOpacity onPressIn={() => navFunction(target)} style={menuStyles.option}>
      <Image style={menuStyles.dotStyle} source={dotSrc} />
      <Text style={menuStyles.text}>{text}</Text>
    </TouchableOpacity>
  </View>
)

const menuItems = {
  'Vibecheck': [yellowDot, 'Vibecheck'],
  'Playlist check': [whiteDot,'PlaylistCheck'],
  'Your playlists': [blackDot,'Playlists'],
  'Your profile': [blueDot,'Profile'],
  'About us': [purpleDot,'About'],
  'Log out': [orangeDot,'LogOut']
};

Animated.timing(emptyState.animation, {
  toValue : 1,
  duration : 1000
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
    const { showDropBox, animation } = this.state;
    const { navigate } = this.props.navigation;

    return (
      <View style={menuStyles.menuActive}>
          <View style={menuStyles.upperActive}>
            <TouchableOpacity onPressIn={this.changeContent}>
              <Image style={{ width:50, resizeMode: 'contain' }} source={burger} />
            </TouchableOpacity>
            <Image style={{ width:180, resizeMode: 'contain' }} source={menuLogo} />
            <View style={{ alignItems: 'flex-end', alignContent: 'flex-end', flex: 1 }}>
              <Image style={{ width: 45, height: 45, resizeMode: 'contain' }} source={menuIcon} />
            </View>
          </View>

           {showDropBox? <Animated.View style={[{opacity: animation}, menuStyles.body]}>
            <View style={menuStyles.menuContainer}>
              {Object.keys(menuItems).map((currItem) => (
                menuItem(navigate, menuItems[currItem][1], menuItems[currItem][0], currItem)
              ))}
            </View>
          </Animated.View> : null }  

    </View>
    );
  }
}