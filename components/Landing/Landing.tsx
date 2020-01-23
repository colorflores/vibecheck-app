import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import landingStyles from './Landing.styles';
import generalStyles from '../../styles/generalStyles';
import landingLogo from '../../assets/img/app_dark_logo.png';

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
          <Text style={generalStyles.title}>What's the story?</Text>
          <TextInput placeholder="I'm feeling lit" style={generalStyles.queryText}>
          </TextInput>
          <TouchableOpacity>
            <Text>Try me</Text>
          </TouchableOpacity>
        </View>
        <Image style={landingStyles.landingLogo} source={landingLogo} />
      </View>
    );
  }
}