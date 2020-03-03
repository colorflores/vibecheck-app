import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import songCardStyles from './SongCard.style';
import playButton from '../../assets/img/play_button.png';
import pauseButton from '../../assets/img/pause_button.png';
import noArt from '../../assets/img/noArt.png';
import { playTrack, pauseTrack } from '../../util/SpotifyAPI.util';
import { getAlbumArt } from '../../util/Genius.util';

const SongCard = ({ title, artist, genre, setActive, songId, amIActive, listIdentifier, geniusID }) => {
  const [songIsActive, setSongStatus] = useState(false);
  const [songAlbum, setSongAlbum] = useState({albumUrl: null});

  useEffect(() => {
    if (listIdentifier !== amIActive && songIsActive) {
      setSongStatus(false);
    }

    if (amIActive === listIdentifier && !songIsActive) {
      shuffle();
    }
  }, [listIdentifier, amIActive, songIsActive]);

  useEffect(() => {
    fetchSongArt();
  }, [title]);

  const shuffle = async () => {
    const songPlayed = await playTrack(songId);
  
    if (songPlayed) {
      setActive(listIdentifier);
      setSongStatus(!songIsActive);
    } else {
      Alert.alert(
        'Vibecheck',
        `The Spotify app must be open in the background in order to play music through the app!`,
        [{
          text: 'Done',
          style: 'default'
        }], { 
          cancelable: true
        }
      );
    }
  }

  const fetchSongArt = async () => {
    const albumArt = await getAlbumArt(geniusID);
    setSongAlbum({ albumUrl: albumArt });
  }

  const updateStatus = async () => {
    setSongStatus(!songIsActive);

    if (!songIsActive) {
      const songPlayed = await playTrack(songId);

      if (songPlayed) {
        setActive(listIdentifier);
        setSongStatus(!songIsActive);
      } else {
        Alert.alert(
          'Vibecheck',
          `The Spotify app must be open in the background in order to play music through the app!`,
          [{
            text: 'Done',
            style: 'default'
          }], { 
            cancelable: true
          }
        );
      }
    } else {
      pauseTrack();
    }
  }

  return (
    <View style={songCardStyles.songCardContainer}>
      <View style={songCardStyles.albumContainer}>
        <Image source={songAlbum.albumUrl !== null ? {uri:songAlbum.albumUrl} : noArt} style={songCardStyles.albumImage} />
        <TouchableOpacity onPress={() => updateStatus()} style={songCardStyles.albumShading}>
          <Image style={songCardStyles.statusButton} source={(songIsActive ? pauseButton : playButton)} />
        </TouchableOpacity>
      </View>
      <View style={songCardStyles.songContainerOutter}>
        <View style={songCardStyles.songContainerInner}>
          <Text onPress={() => Linking.openURL(`https://open.spotify.com/track/${songId}`)} style={songCardStyles.songTitle}>
            {title}
          </Text>
          <View style={songCardStyles.division} />
          <Text style={songCardStyles.songArtist}>
            {artist}
          </Text>
          <Text style={songCardStyles.songAlbum}>
            {genre}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SongCard;