import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, TouchableHighlightBase } from 'react-native';
import { LandingInterfaceProps, LandingInterfaceState } from '../../interfaces/Landing.interface';
import landingStyles from './Landing.styles';
import generalStyles from '../../styles/generalStyles';
import landingLogo from '../../assets/img/app_dark_logo.png';
import playButton from '../../assets/img/play.png';
import mockResult from '../../mock/mockplaylist.json';

const sampleQueries = [
  "I'm falling in love",
  "Just got to a party",
  "My friend is getting married",
  "Trying to study",
]

export default class Landing extends React.Component<LandingInterfaceProps, LandingInterfaceState> {
  constructor(props: LandingInterfaceProps) {
    super(props);
    this.state = {
      placeHolder: sampleQueries[0],
      query: '',
      isActive: false,
    };
  }

  componentDidMount() {
    this.changePlaceHolder();
  }

  changePlaceHolder = () => {
    let currPlaceHolder = 0;

    const placeHolderTimer = setInterval(() => {
      const { isActive } = this.state;
      if (isActive) {
        clearInterval(placeHolderTimer);
        this.setState({
          placeHolder: '',
        })
      } else {
        if (currPlaceHolder > sampleQueries.length - 1) {
          currPlaceHolder = 0;
        }
        this.setState({
          placeHolder: sampleQueries[currPlaceHolder++],
        })
      }
    }, 1500)
  }

  updateQuery = (input: string) => {
    this.setState({
      query: input
    });
  }

  activateText = (tap) => {
    this.setState({
      isActive: tap,
    })
  }

  checkVibe = () => {
    const { query } = this.state;
    const { navigate } = this.props.navigation;

    // ?Do some stuff with the query

    if (query !== '') {
      navigate('Vibecheck', {query: query, results: {mockResult}})
    }

  }

  render() {
    const { placeHolder, query } = this.state;

    return (
      <View style={landingStyles.landing}>
        <View style={landingStyles.landingContainer}>
          <Text style={[generalStyles.title, landingStyles.elementMargin]}>What's the story?</Text>
          <TextInput 
            onFocus={tap => this.activateText(tap)} 
            onChangeText={input => this.updateQuery(input)} 
            value={query} placeholderTextColor="rgba(0,0,0,0.3)" 
            placeholder={placeHolder} 
            style={[generalStyles.queryText, landingStyles.elementMargin, landingStyles.queryBox]}
          />
          <TouchableOpacity onPress={this.checkVibe} style={[landingStyles.playBox, landingStyles.elementMargin]}>
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