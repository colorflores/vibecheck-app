import { AuthSession } from 'expo';
import axios from 'axios';
import spotifyCredentials from '../secret';

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

  try {
    const redirectUrl = AuthSession.getRedirectUrl();
    result = await AuthSession.startAsync({
      authUrl: `${spotifyURL}?response_type=code&client_id=${spotifyCredentials.cliendId}&scope=${encodeURIComponent(spotifyScopes)}&redirect_uri=${encodeURIComponent(redirectUrl)}`
    });
  } catch (err) {
    console.error(err)
  }

  return result.params.code
}

export const getAuthTokens = async () => {
  try {
    const authorizationCode = await getAuthCode();
    const encodedCredentials = btoa(`${spotifyCredentials.cliendId}:${spotifyCredentials.clientSecret}`);
    const reqConfig = {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${spotifyCredentials.redirectUri}`
    }

    const response = await axios.post(spotifyAPI_URL, reqConfig).then((res) => Promise.resolve(res.data));

    const {
      accesToken,
      refreshToken,
      expiresIn,
    } = response;

    const expiryTime = getExpiryTime(expiresIn);
    // await 

  } catch (err) {
    console.log(err);
  }
}
