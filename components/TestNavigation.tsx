import React from 'react';
import { Text, Button, View } from 'react-native';

export default class TestNavigation extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignContent: 'center' }}>
        <Button
          title="Landing Page"
          onPress={() => navigate('Landing')}
        />
      </View>
    );
  }
}