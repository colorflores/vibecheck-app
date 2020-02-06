import { AuthSession } from 'expo';
import axios from 'axios';
import spotifyCredentials from '../secret';
import { saveData, getData } from './Storage.util';

const spotifyURL = 'https://accounts.spotify.com/authorize';
const spotifyAPI_URL = 'https://accounts.spotify.com/api/token';

const spotifyScopes = [
  'user-modify-playback-state', 
  'user-read-currently-playing', 
  'user-read-playback-state', 
  'user-library-modify',
  'user-library-read', 
  'playlist-read-private', 
  'playlist-read-collaborative', 
  'playlist-modify-public',
  'playlist-modify-private', 
  'user-read-recently-played', 
  'user-top-read'
].join(' ');

const getExpiryTime = (time) => new Date().getTime() + time * 1000;

export const getAuthCode = async () => {
  let result;
  const redirectUrl = AuthSession.getRedirectUrl();

  try {
    result = await AuthSession.startAsync({
      authUrl: `${spotifyURL}?response_type=code&client_id=${spotifyCredentials.clientId}&scope=${encodeURIComponent(spotifyScopes)}&redirect_uri=${encodeURIComponent(redirectUrl)}`
    });
  } catch (err) {
    console.error(err)
  }

  return result.params.code;
}

export const getAuthTokens = async () => {
  try {
    const authorizationCode = await getAuthCode();
    const encodedCredentials = btoa(`${spotifyCredentials.clientId}:${spotifyCredentials.clientSecret}`);
    const reqConfig = {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${spotifyCredentials.redirectUri}`
    }

    const response = await axios.post(spotifyAPI_URL, reqConfig).then((res) => Promise.resolve(res.data));

    const {
      access_token,
      refresh_token,
      expires_in,
    } = response;

    const expiryTime = getExpiryTime(expires_in);
    
    await saveData('ACCESS_TOKEN', access_token);
    await saveData('REFRESH_TOKEN', refresh_token);
    await saveData('EXPIRY_TIME', expiryTime.toString());

  } catch (err) {
    console.log(err);
  }
}

export const refreshAuthTokens = async () => {
  try {
    const encodedCredentials = btoa(`${spotifyCredentials.clientId}:${spotifyCredentials.clientSecret}`);
    const currRefreshToken = await getData('REFRESH_TOKEN');
    
    if (currRefreshToken) {
      const reqConfig = {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=refresh_token&refresh_token=${currRefreshToken}`,
      }
  
      const response = await axios.post(spotifyAPI_URL, reqConfig).then((res) => Promise.resolve(res.data));
      
      const {
        access_token,
        refresh_token,
        expires_in,
      } = response;

      await saveData('ACCESS_TOKEN', access_token);
      if (refresh_token) { await saveData('REFRESH_TOKEN', refresh_token); };
      await saveData('EXPIRY_TIME', expires_in.toString());

    } else {
      await getAuthTokens();
    }
  } catch (error) {
    console.log(error);
  }
}
