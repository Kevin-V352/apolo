import { Artist } from '../interfaces/trackInterfaces';

export const dateFormat = (date: string): string => (
  date.split('-').reverse().join('/')
);

export const letterSeparator = (lyrics: string | null, name: string, artists: string) => {
  if (!lyrics) return null;

  const header = `Paroles de la chanson ${name} par ${artists}<br>`
    .replaceAll('?', '')
    .toLowerCase();

  const lyricsFormatted = lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

  const includesHeader = lyricsFormatted
    .toLowerCase()
    .includes(header);

  if (includesHeader) return lyricsFormatted.slice(header.length);

  return lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
};

export const trackDuration = (ms: number) => {
  const minutes: number = Math.floor(ms / 60000);
  const seconds: number = parseInt(((ms % 60000) / 1000).toFixed(0), 10);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const orderArtists = (artists: Artist[]): string => {
  if (artists.length === 1) return artists[0].name;

  let result: string = '';
  // eslint-disable-next-line no-plusplus
  for (let i: number = 0; i < artists.length; i++) {
    if (i !== artists.length - 1) {
      result += `${artists[i].name}, `;
    } else {
      result += artists[i].name;
    }
  }
  return result;
};
