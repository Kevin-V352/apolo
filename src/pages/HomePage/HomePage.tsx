import { useContext } from 'react';

import Header from '../../components/Banner/Banner';
import TrackCard from '../../components/TrackCard/TrackCard';
import { TracksContext } from '../../contexts/tracksContext/TracksContext';
import * as S from './HomePageElements';

const HomePage = () => {
  const { testTracks, tracks } = useContext(TracksContext);

  const isSearching: boolean = (tracks.length > 0);

  return (
    <S.Container isSearching={isSearching}>
      {
        !isSearching && <Header />
      }
      {
        !isSearching && testTracks.map(({ album, name, artists, id }) => (
          <TrackCard
            imageUrl={album.images[1].url}
            trackTitle={name}
            artistName={artists[0].name}
            key={id}
          />
        ))
      }
      {
        tracks.map(({ album, name, artists, id }) => (
          <TrackCard
            imageUrl={album.images[1].url}
            trackTitle={name}
            artistName={artists[0].name}
            key={id}
          />
        ))
      }
    </S.Container>
  );
};

export default HomePage;
