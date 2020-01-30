import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import test from '../../assets/img/test.jpg';
import songCardStyles from './SongCard.style';
import generalStyles from '../../styles/generalStyles';

const SongCard = ({ title, artist, album, albumuri = test }) => (
  <View style={songCardStyles.songCardContainer}>
    <View style={{ width: songCardStyles.songCardContainer.height, height: songCardStyles.songCardContainer.height, alignItems: 'center', flexDirection: 'column' }}>
      <Image style={{ height: '100%', resizeMode: 'contain' }} source={albumuri} />
    </View>
    <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', padding: 10 }}>
      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
        <Text style={songCardStyles.songTitle}>
          {title} 
        </Text>
        <View style={{ width: '100%', borderTopColor: 'black', borderTopWidth: 1, marginTop: 4, marginBottom: 4 }} />
        <View style={{ width: '100%' }}>
          <Text style={songCardStyles.songArtist}>
            {artist}
          </Text>
          <Text style={songCardStyles.songAlbum}>
            {album}
          </Text>
        </View>
      </View>
    </View>
  </View>
)

export default SongCard;