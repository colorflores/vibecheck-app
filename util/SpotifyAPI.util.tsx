import { getData } from './Storage.util';
import Spotify from 'spotify-web-api-js';

const s = new Spotify();

export const initializeAPI = (token: string) => {
  s.setAccessToken(token);
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