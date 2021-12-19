import axios from 'axios';

const lyricsOvhAPI = axios.create({ baseURL: 'https://api.lyrics.ovh/v1' });

export default lyricsOvhAPI;
