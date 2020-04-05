import React from 'react';
//allows us to user JSX in our react component file. JSX is javascript xml. XML is the tag syntax we see in render.
import { Text, View, TouchableOpacity, Image } from 'react-native';
import profileStyles from './Profile.styles';
import personLogo from '../../assets/img/profile_icon.png';
import thumbs from '../../assets/img/100.png';
import Menu from '../Menu/Menu';
import {getProfileData, getTopArtists} from '../../util/SpotifyAPI.util';
//get profile and topArtists retrieve users account data with their token
import { ProfileInterfaceProps, ProfileInterfaceState } from '../../interfaces/Profile.interface';

//const means the value these are assigned cannot change
//chose empty state var name because it describes to me our default state. Not a built in property in React something I chose.
const emptyState = {
  vibeColors: ['#FFFFFF','#FFC300','#5187F0','#FF351A','#8600B6','#00cc00'], //White, yellow, blue,orange,purple, green
  vibe: 0,
}

export default class Profile extends React.Component<ProfileInterfaceProps,ProfileInterfaceState> {
  //export default class means we are prompting this class to be imported into another module elsewhere, here its app.js
  //extends means we are making this class receive props and state from another component
  //the component here is the ProfileInterface class. It inherits Navigation as a prop, and multiple state attributes
  //you can use this instead of the constructor

  //the rationale for assigning these values outside the state is to make it const
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      ...emptyState
    }
  };

  //asynch keyword changes an asycnhronous function to run like a synchronous function would run
  //the rationale is we want to wait for our components to mount before we continue
  //we dont want top artists to fail to get its data and try to print it on the profile screen
  async componentDidMount() {
    //we use await because getTopArtists is a promise
    //promises are asycnhronous operations that could not be completed while other functions continue
    //using await says way for this to finish then continue the function
    const topArtist = await getTopArtists();
    this.setState({ topArtist: topArtist })
  }

  changeColor = () => { 
    if(emptyState.vibe==5){ emptyState.vibe = -1;}
    else{this.setState({ vibe: ++emptyState.vibe}) }
  }
  
  render() {
    const {vibe, vibeColors, topArtist} = this.state;
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <Menu navigation={navigation} /> 
        <View style={profileStyles.profile}>
          <View style={[profileStyles.middleContainer]}>
            <TouchableOpacity onPress={this.changeColor}>
              {getProfileData().images.length!==0 ? 
              (<Image style={{width:200, height: 300, resizeMode: 'contain' }} source={{uri:getProfileData().images[0].url}} />) 
              : null}
              <Text style={[profileStyles.text, {color:vibeColors[vibe]}]}>{`${getProfileData().display_name}'s vibe`}</Text>  
            </TouchableOpacity>
          </View>   
          <Text style={[profileStyles.text,{marginTop: 20}]}>{`Your favorite artist: ${topArtist}`}</Text>  
          {/* <View style={[profileStyles.lowerContainer]}>
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
          </View> */}
        </View>
      </View>
    );
  }
}
