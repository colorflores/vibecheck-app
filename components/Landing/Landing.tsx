import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, TouchableHighlightBase } from 'react-native';
import { LandingInterfaceProps, LandingInterfaceState } from '../../interfaces/Landing.interface';
import landingStyles from './Landing.styles';
import generalStyles from '../../styles/generalStyles';
import landingLogo from '../../assets/img/app_dark_logo.png';
import playButton from '../../assets/img/play.png';

const sampleQueries = [
  "I'm falling in love",
  "Just got to a party",
  "My friend is getting married",
  "Trying to study",
]

export default class Landing extends React.Component<LandingInterfaceProps, LandingInterfaceState> {
  constructor(props: object) {
    super(props);
    this.state = {
      placeHolder: sampleQueries[0],
      query: '',
    };
    this.changePlaceHolder = this.changePlaceHolder.bind(this);
  }

  componentDidMount() {
    this.changePlaceHolder();
  }

  changePlaceHolder = () => {
    const { query } = this.state;
    let currPlaceHolder = 0;

    const placeHolderTimer = setInterval(() => {
      if (query !== '') {
        clearInterval(placeHolderTimer);
      }

      if (currPlaceHolder > sampleQueries.length - 1) {
        currPlaceHolder = 0;
      }

      this.setState({
        placeHolder: sampleQueries[currPlaceHolder++],
      })
    }, 3000)
  }

  updateQuery = () => {
    this.setState({
      query: 'random'
    });
  }

  checkVibe = () => {
    // ?Call backend with the text entered;
  }

  render() {
    const { placeHolder, query } = this.state;

    return (
      <View style={landingStyles.landing}>
        <View style={landingStyles.landingContainer}>
          <Text style={[generalStyles.title, landingStyles.elementMargin]}>What's the story?</Text>
          <TextInput onChange={this.updateQuery} value={query} placeholderTextColor="rgba(0,0,0,0.3)" placeholder={placeHolder} style={[generalStyles.queryText, landingStyles.elementMargin, landingStyles.queryBox]}>
          </TextInput>
          <TouchableOpacity style={[landingStyles.playBox, landingStyles.elementMargin]}>
            <Image style={landingStyles.playButton} source={playButton} />
          </TouchableOpacity>
          <TouchableOpacity style={landingStyles.playlistButton}>
            <Text style={generalStyles.titleButton}>don't have one?</Text>
          </TouchableOpacity>
        </View>
        <Image style={generalStyles.bottomDarkLogo} source={landingLogo} />
      </View>
    );
  }
}