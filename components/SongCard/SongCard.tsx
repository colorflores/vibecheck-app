import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const SongCard = ({ title, artist, album, albumuri }) => (
  <View>
    <Text>
      {title}
    </Text>
    <hr/>
    <View>
      <Text>
        {artist}
      </Text>
      <Text>
        {album}
      </Text>
    </View>
  </View>
)

export default SongCard;