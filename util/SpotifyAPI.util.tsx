import { getData } from './Storage.util';
import { refreshAuthTokens } from './Spotify.util';
import Spotify from 'spotify-web-api-js';

const s = new Spotify();

const verifyToken = async () => {
  const currentTokenTime = await getData('EXPIRY_TIME');
  const currentDate = new Date().getTime();

  if (JSON.parse(currentTokenTime) < currentDate) {
    await refreshAuthTokens();
  }
}

export const initializeAPI = (token: string) => s.setAccessToken(token);

export const playTrack = async (songId: string) => {
  await verifyToken();

  fetch('https://api.spotify.com/v1/me/player/play', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${s.getAccessToken()}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      'uris': [`spotify:track:${songId}`]
    })
  });
}

export const pauseTrack = () => {
  s.pause();
}
export const savePlaylist = async (nameOfPlaylist: string) => {

  const playlistRequest = await fetch('https://api.spotify.com/v1/users/{user_id}/playlists',{
    method: 'POST', 
    headers: {
      'Authorization': `Bearer ${s.getAccessToken()}`,   
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: nameOfPlaylist

    })
  })
}
