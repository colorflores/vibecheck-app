import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from '../styles/styles';

export default class Landing extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {

    };
  }

  checkVibe = () => {
    // ?Call backend with the text entered;
  }

  render() {
    return (
      <View style={styles.landing}>
        <Text>What's the story?</Text>
        <TextInput></TextInput>
        <Button title="don't have one?" onPress={this.checkVibe()} />
      </View>
    )
  }
}