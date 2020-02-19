import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import test from '../../assets/img/test.jpg';
import songCardStyles from './SongCard.style';
import playButton from '../../assets/img/play_button.png';
import pauseButton from '../../assets/img/pause_button.png';

const SongCard = ({ title, artist, album, albumuri = test, controlURI, setActive, id, amIActive }) => {
  const [songIsActive, setSongStatus] = useState(false);

  useEffect(() => {
    if (id !== amIActive && songIsActive) {
      setSongStatus(false);
    }
  })

  const updateStatus = () => {
    setSongStatus(!songIsActive);

    if (!songIsActive) {
      setActive(id);
    }
  }

  return (
    <View style={songCardStyles.songCardContainer}>
      <View style={songCardStyles.albumContainer}>
        <Image source={albumuri} style={songCardStyles.albumImage} />
        <TouchableOpacity onPress={() => updateStatus()} style={{ 
            position: 'absolute', 
            backgroundColor: 'rgba(0,0,0, 0.3)', 
            height: '100%', 
            width: '100%',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center' 
          }}>
          <Image style={{ width: 40, height: 40, resizeMode: 'contain' }} source={(songIsActive ? pauseButton : playButton)} />
        </TouchableOpacity>
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
  );
};

export default SongCard;