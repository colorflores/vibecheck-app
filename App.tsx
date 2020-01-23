import React from 'react';
import Landing from './components/Landing/Landing';
import generalStyles from './styles/generalStyles';
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
      <View style={generalStyles.appContainer}>
        <Landing />
      </View>
    );
  }
}