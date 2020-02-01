import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import test from '../../assets/img/test.jpg';
import songCardStyles from './SongCard.style';

const SongCard = ({ title, artist, album, albumuri = test, controlURI }) => (
  <View style={songCardStyles.songCardContainer}>
    <View style={songCardStyles.albumContainer}>
      <Image source={albumuri} style={songCardStyles.albumImage} />
    </View>
    <View style={songCardStyles.songContainerOutter}>
      <View style={songCardStyles.songContainerInner}>
        <Text style={songCardStyles.songTitle}>
          {title}
        </Text>
        <View style={songCardStyles.division} />
        <Text style={songCardStyles.songArtist}>
          {artist}
        </Text>
        <Text style={songCardStyles.songAlbum}>
          {album}
        </Text>
      </View>
    </View>
  </View>
)

export default SongCard;