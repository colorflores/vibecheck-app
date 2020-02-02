import React from 'react';
import { Button, View } from 'react-native';

export default class TestNavigation extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignContent: 'center' }}>
        <Button
          title="Landing Page"
          onPress={() => navigate('Landing')}
        />
        <Button
          title="Profile Page"
          onPress={() => navigate('Profile')}
        />
        <Button
          title="Menu"
          onPress={() => navigate('Menu')}
        />
        <Button
          title="Vibecheck"
          onPress={() => navigate('Vibecheck')}
        />
        <Button
          title="Vibe recommendation"
          onPress={() => navigate('Vibe recommendation')}
        />
        <Button
          title="Loading"
          onPress={() => navigate('Loading')}
        />
      </View>
    );
  }
}