import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import test from '../../assets/img/test.jpg';
import songCardStyles from './SongCard.style';
import generalStyles from '../../styles/generalStyles';

const SongCard = ({ title, artist, album, albumuri = test }) => (
  <View style={songCardStyles.songCardContainer}>
    <View style={{ width: '30%', alignItems: 'center', flexDirection: 'column' }}>
      <Image style={{ height: '100%', resizeMode: 'contain' }} source={albumuri} />
    </View>
    <View style={{ width: '70%', alignContent: 'center', padding: 10 }}>
      <Text style={songCardStyles.songTitle}>
        {title} 
      </Text>
      <View style={{ width: '100%', borderTopColor: 'black', borderTopWidth: 1 }} />
      <View style={{ height: '100%', width: '100%' }}>
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