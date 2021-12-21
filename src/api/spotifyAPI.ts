/* eslint-disable no-param-reassign */
import axios, { AxiosPromise } from 'axios';

import { TokenResponse } from '../interfaces/tokenInterfaces';

const {
  REACT_APP_SPOTIFY_CLIENT_ID,
  REACT_APP_SPOTIFY_CLIENT_SECRET
} = process.env;

export const spotifyAuthAPI: AxiosPromise<TokenResponse> = axios('https://accounts.spotify.com/api/token', {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${btoa(`${REACT_APP_SPOTIFY_CLIENT_ID}:${REACT_APP_SPOTIFY_CLIENT_SECRET}`)}`
  },
  data: 'grant_type=client_credentials',
  method: 'POST'
});

export const spotifyAPI = axios.create({ baseURL: 'https://api.spotify.com/v1' });

spotifyAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers!.Authorization = `Bearer ${JSON.parse(token)}`;
    config.method = 'GET';
  };

  return config;
}, (error) => console.log(error));
