import React from 'react';
import { Text, View, Image, Animated, Easing } from 'react-native';
import loadingStyles from './Loading.styles';
import splashLogo from '../../assets/img/app_dark_logo.png';
import loadingLogo from '../../assets/img/loading_logo.png';
import generalStyles from '../../styles/generalStyles';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const emptyState = {
  showDropBox: false,
  spinValue: new Animated.Value(0),
  colorNumber: new Animated.Value(0)

}

Animated.loop( Animated.timing(emptyState.spinValue, {
  toValue : 1,
  duration : 3000,
  easing: Easing.linear
})).start();

Animated.loop( Animated.timing(emptyState.colorNumber, {
  toValue : 1,
  duration : 3000,
})).start();

const spin = emptyState.spinValue.interpolate({
  inputRange: [0,1],
  outputRange:['0deg','360deg'],
})

const color = emptyState.colorNumber.interpolate({
  inputRange: [0,1],
  outputRange: ['#FFFFFF','#000000']
});


export default class Profile extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {
      ...emptyState
    };
  }

  render() {
    return (
      <View style={loadingStyles.loading}>
        <View style={loadingStyles.loadingContainer}>
          <Animated.Image style={[{transform:[{rotate: spin}]},{ height: 200, resizeMode: 'contain'}, loadingStyles.elementMargin]} source={loadingLogo} />
          <Animated.Text style={[loadingStyles.title,{color:color}]}> Signing you in...</Animated.Text>
        </View>
        <Image style={generalStyles.bottomDarkLogo} source={splashLogo} />
      </View>
      
    );
  }
}

