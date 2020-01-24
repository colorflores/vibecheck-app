import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import landingStyles from './Landing.styles';
import generalStyles from '../../styles/generalStyles';
import landingLogo from '../../assets/img/app_dark_logo.png';
import playButton from '../../assets/img/play.png';

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
          <Text style={[generalStyles.title, landingStyles.elementMargin]}>What's the story?</Text>
          <TextInput placeholder="I'm feeling lit" style={[generalStyles.queryText, landingStyles.elementMargin, landingStyles.queryBox]}>
          </TextInput>
          <Image style={[landingStyles.playButtom, landingStyles.elementMargin]} source={playButton} />
          <TouchableOpacity style={landingStyles.playlistButton}>
            <Text style={generalStyles.titleButton}>don't have one?</Text>
          </TouchableOpacity>
        </View>
        <Image style={generalStyles.bottomDarkLogo} source={landingLogo} />
      </View>
    );
  }
}