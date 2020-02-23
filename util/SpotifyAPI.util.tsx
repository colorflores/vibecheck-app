import { getData } from './Storage.util';
import { refreshAuthTokens } from './Spotify.util';
import Spotify from 'spotify-web-api-js';

const s = new Spotify();
let user = null;

const verifyToken = async () => {
  const currentTokenTime = await getData('EXPIRY_TIME');
  const currentDate = new Date().getTime();

  if (JSON.parse(currentTokenTime) < currentDate) {
    await refreshAuthTokens();
  }
}

export const initializeAPI = async (token: string) => {
  s.setAccessToken(token);
  
  user = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${s.getAccessToken()}`,
    },
  }).then(async (res) => {
    return await res.json();
  })
};

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

export const savePlaylist = async (name, songs) => {
  let newPlaylist = null;

  newPlaylist = await fetch (`https://api.spotify.com/v1/users/${user.id}/playlists`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${s.getAccessToken()}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
    })
  }).then(async (res) => Promise.resolve(await res.json()))

  console.log(songs);

  // ?Do this when URIs are added to each song
  // await s.addTracksToPlaylist(newPlaylist.id, [
    
  // ])
}
