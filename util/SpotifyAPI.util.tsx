import { getData } from './Storage.util';
import { refreshAuthTokens } from './Spotify.util';
import Spotify from 'spotify-web-api-js';

const s = new Spotify();
let user = null;
let latestPlaylistURL = null;
let latestPlaylist = null;

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

  const currDevices = await s.getMyDevices();
  const mobile = await currDevices.devices.reduce((mobile, curr) => curr.type === "Smartphone" ? mobile = curr : null);

  await fetch(`https://api.spotify.com/v1/me/player`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${s.getAccessToken()}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      'device_id': [mobile.id],
      'play': true,
    })
  });

  fetch(`https://api.spotify.com/v1/me/player/play?device_id=${mobile.id}`, {
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

export const sharePlaylist = async (name, songs) => {
  if (latestPlaylistURL && name === latestPlaylist) {
    return latestPlaylistURL;
  } else {
    await savePlaylist(name, songs)
    return latestPlaylistURL;
  }
}

export const savePlaylist = async (nameOfPlaylist: string, songs) => {
  await verifyToken();

  let newPlaylist = null;

  newPlaylist = await fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`,{
    method: 'POST', 
    headers: {
      'Authorization': `Bearer ${s.getAccessToken()}`,   
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameOfPlaylist
    })
  }).then(async (res) => {
    return await res.json();
  });

  latestPlaylist = newPlaylist.name;
  latestPlaylistURL = newPlaylist.external_urls.spotify;
  
  fetch(`https://api.spotify.com/v1/playlists/${newPlaylist.id}/tracks`,{
    method: 'POST', 
    headers: {
      'Authorization': `Bearer ${s.getAccessToken()}`,   
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      uris: Object.keys(songs).map((songObj) => {
        return `spotify:track:${songs[songObj]['track_id.1']}`;
      })
    })
  }).then(async (res) => {
    return await res.json();
  });

  fetch('https://vibecheck.ca/coverImage.txt', {
    method: 'GET',
    headers : {
      'Content-Type': 'text/plain'
    }
  }).then(async (res) => {
    const encodedImage = await res.text();

    fetch(`https://api.spotify.com/v1/playlists/${newPlaylist.id}/images`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${s.getAccessToken()}`,   
        'Content-Type': 'image/jpeg'
      },
      body: encodedImage
    });
  })
}

export const getProfileData = () =>{
  return user
}

export const getTopArtists = async () => { 
  await verifyToken();

  let topArtist = await fetch('https://api.spotify.com/v1/me/top/artists', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${s.getAccessToken()}`,
    },
  }).then(async (res) => {
    return await res.json()
  })
  return topArtist.items[0].name
};

export const getAlbumArt = async (artist: string, album: string) => {
  await verifyToken();

  return await fetch(`https://itunes.apple.com/search?term=${artist.replace(' ', '+')}+${album.replace(' ', '+')}&limit=1&entity=song`, {
    method: 'GET',
  }).then(async res => {
    const result = await res.json();
    if (result.results) {
      return result.results[0].artworkUrl100.replace('100x100bb', '400x400bb');
    } else {
      return null;
    }
  });
}