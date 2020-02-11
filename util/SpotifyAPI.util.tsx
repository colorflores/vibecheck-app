import { getData } from './Storage.util';
import Spotify from 'spotify-web-api-js';

const s = new Spotify();

export const initialize = (token: string) => {
  s.setAccessToken(token);
}

