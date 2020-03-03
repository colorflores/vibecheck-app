import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native';
import { LandingInterfaceProps, LandingInterfaceState } from '../../interfaces/Landing.interface';
import landingStyles from './Landing.styles';
import generalStyles from '../../styles/generalStyles';
import playButton from '../../assets/img/play.png';
import Menu from '../Menu/Menu';
import { saveData, deleteData as yeet } from '../../util/Storage.util';

const sampleQueries = [
  'Sad Boi Hours',
  'I love her',
  'Nature ❄️🌲',
  'Way Up I Feel Blessed'
]

export default class Landing extends React.Component<LandingInterfaceProps, LandingInterfaceState> {
  constructor(props: LandingInterfaceProps) {
    super(props);
    this.state = {
      placeHolder: sampleQueries[0],
      query: '',
      isActive: false,
      samples: false,
    };
  }

  async componentDidMount() { 
    await yeet('LATEST_QUERY');
    await yeet('LATEST_RESULT');
    
    this.setState({
      query: null,
    });

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
        if (currPlaceHolder === sampleQueries.length - 1) {
          currPlaceHolder = 0;
        } else {
          currPlaceHolder++;
        }
        this.setState({
          placeHolder: sampleQueries[currPlaceHolder],
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

  checkVibe = async () => {
    const { query } = this.state;
    const { navigate } = this.props.navigation;

    if (query !== '') {
      await saveData('LATEST_QUERY', query);
      navigate('Vibecheck');
    }
  }

  handleInput = (tap) => {
    if (tap.nativeEvent.key == 'Enter'){
      Keyboard.dismiss();
    }
  }

  replaceQuery = () => {
    this.setState({ 
      query: sampleQueries[Math.floor(Math.random() * sampleQueries.length)], 
      isActive: true 
    });
  }

  render() {
    const { placeHolder, query, samples } = this.state;
    const { navigation } = this.props;

    return (
      <View style={landingStyles.landing}>
        <Menu navigation={navigation} />
        <View style={landingStyles.landingContainer}>
          <Text style={[generalStyles.title, landingStyles.elementMargin]}>What's the story?</Text>
          <TextInput
            onKeyPress={this.handleInput} 
            onFocus={tap => this.activateText(tap)} 
            onChangeText={input => {
              if (input[input.length - 1] !== '\n') {
                this.updateQuery(input)
              }
            }}
            value={query} placeholderTextColor="rgba(0,0,0,0.3)" 
            placeholder={placeHolder}
            multiline={true}
            style={[generalStyles.queryText, landingStyles.elementMargin, landingStyles.queryBox]}
          />
          <TouchableOpacity onPress={this.checkVibe} style={[landingStyles.playBox, landingStyles.elementMargin]}>
            <Image style={landingStyles.playButton} source={playButton} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPressIn={() => this.setState({ samples: true })} 
            onPressOut={() => this.setState({ samples: false })}
            onPress={this.replaceQuery} 
            activeOpacity={1}
            style={samples ? landingStyles.playlistButtonActive : landingStyles.playlistButtonInactive}>
            <Text style={generalStyles.titleButton}>don't have one?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}