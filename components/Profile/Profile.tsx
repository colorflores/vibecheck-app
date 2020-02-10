import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import profileStyles from './Profile.styles';
import personLogo from '../../assets/img/profile_icon.png';
import thumbs from '../../assets/img/100.png';
import Menu from '../Menu/Menu';

import { ProfileInterfaceProps, ProfileInterfaceState } from '../../interfaces/Profile.interface';

const emptyState = {
  vibeColors: ['#FFFFFF','#FFC300','#5187F0','#FF351A','#8600B6','#00cc00'], //White, yellow, blue,orange,purple, green
  vibe: 0,
  status: 'show'
}

export default class Profile extends React.Component<ProfileInterfaceProps,ProfileInterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      ...emptyState
    }
  };

  changeColor = () => {  
    if(emptyState.vibe==5){ emptyState.vibe = -1;}

    else{this.setState({ vibe: ++emptyState.vibe}) }
  }

  
  hide = () => {  
    if(this.state.status=='show'){this.setState({ status: 'none',})}
    else{ this.setState({ status: 'show',})}
  }
  
  render() {
    const {vibe, vibeColors, status} = this.state;
    return (
      <View style={{ flex: 1, alignContent: 'center', flexDirection: 'column' }}>
        <Menu hideContent={this.hide} navigation/>
        <View style={[profileStyles.profile, {display: status}]}>
          <View style={[profileStyles.middleContainer]}>
          <TouchableOpacity onPress={this.changeColor}>
            <Image style={{width:200, height: 300, resizeMode: 'contain' }} source={personLogo} />
            <Text style={[profileStyles.text,{color:vibeColors[vibe]}]}> Nathan's Vibe </Text>  
          </TouchableOpacity>
          </View>
          <View style={[profileStyles.lowerContainer]}>
            <View style={profileStyles.elementMargin}>
              <Image style={{width:50, height: 50, resizeMode: 'contain' }} source={thumbs} />
              <Image style={{width:50, height: 50, resizeMode: 'contain' }} source={thumbs} />
            </View>
            <View style={profileStyles.elementMargin}>
              <Image style={{width:50, height: 50, resizeMode: 'contain' }} source={thumbs} />
              <Image style={{width:50, height: 50, resizeMode: 'contain' }} source={thumbs} />
            </View>
            <View style={profileStyles.elementMargin}>
              <Image style={{width:50, height: 50, resizeMode: 'contain' }} source={thumbs} />
              <Image style={{width:50, height: 50, resizeMode: 'contain' }} source={thumbs} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
