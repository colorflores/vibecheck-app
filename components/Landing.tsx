import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import landingStyles from './Landing.styles';
import landingLogo from '../assets/img/app_dark_logo.png'

export default class Landing extends React.Component {
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
    // ?Call backend with the text entered;
  }

  render() {
    return (
      <View style={landingStyles.landing}>
        <View style={landingStyles.landingContainer}>
          <Text style={landingStyles.titleText}>What's the story?</Text>
          <TextInput>
          </TextInput>
          <Button title="submit" onPress={this.checkVibe()} ></Button>
          <Button title="don't have one?" />
        </View>
        <Image style={{ position: 'absolute', bottom: 40, left: 10, height: 40, resizeMode: 'contain' }} source={landingLogo} />
      </View>
    );
  }
}