import React from 'react';
import Landing from './components/Landing';
import appStyles from './App.styles';
import { View } from 'react-native';

export default class App extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {
      
    }
  }

  // ?We do the spotify thing here

  render() {
    return (
      <View style={appStyles.appContainer}>
        <Landing />
      </View>
    );
  }
}