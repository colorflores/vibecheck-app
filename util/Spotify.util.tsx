import { AuthSession } from 'expo';
import spotifyCredentials from '../secret';

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

export const getAuthorizationCode = async () => {
  let result;

  try {
    const redirectUrl = AuthSession.getRedirectUrl();
    result = await AuthSession.startAsync({
      authUrl: 'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' +
        spotifyCredentials.cliendId +
        (spotifyScopes ? `&scope=${encodeURIComponent(spotifyScopes)}` : '') +
        '&redirect_uri=' +
        encodeURIComponent(redirectUrl),
    })
  } catch (err) {
    console.error(err)
  }

  return result.params.code
}