import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import songCardStyles from './SongCard.style';
import playButton from '../../assets/img/play_button.png';
import pauseButton from '../../assets/img/pause_button.png';
import noArt from '../../assets/img/noArt.png';
import { playTrack, pauseTrack, getAlbumArt } from '../../util/SpotifyAPI.util';

const SongCard = ({ title, artist, album, albumuri = test, setActive, songId, amIActive, listIdentifier, albumArt }) => {
  const [songIsActive, setSongStatus] = useState(false);
  const [songAlbum, setSongAlbum] = useState({albumUrl: null});

  useEffect(() => {
    if (listIdentifier !== amIActive && songIsActive) {
      setSongStatus(false);
    }
  });

  useEffect(() => {
    const fetchSong = async () => {
      const albumArt = await getAlbumArt(artist, album);
      setSongAlbum({ albumUrl: albumArt });
    }

    if (!songAlbum.albumUrl) {
      fetchSong();
    }
  });

  const updateStatus = async () => {
    setSongStatus(!songIsActive);

    if (!songIsActive) {
      playTrack(songId);
      setActive(listIdentifier);
    } else {
      pauseTrack();
    }
  }

  return (
    (songAlbum.albumUrl !== null ? (
      <View style={songCardStyles.songCardContainer}>
        <View style={songCardStyles.albumContainer}>
          <Image source={songAlbum.albumUrl !== null ? {uri:songAlbum.albumUrl} : noArt} style={songCardStyles.albumImage} />
          <TouchableOpacity onPress={() => updateStatus()} style={songCardStyles.albumShading}>
            <Image style={songCardStyles.statusButton} source={(songIsActive ? pauseButton : playButton)} />
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
    ) : null) 
  );
};

export default SongCard;