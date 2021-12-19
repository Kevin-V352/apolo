import { useContext, useEffect } from 'react';

import { RiQuestionMark } from 'react-icons/ri';

import Banner from '../../components/Banner/Banner';
import Pager from '../../components/Pager/Pager';
import TrackCard from '../../components/TrackCard/TrackCard';
import { TracksContext } from '../../contexts/tracksContext/TracksContext';
import { Text } from '../../shared/StylizedComponents';
import * as S from './HomePageElements';

const scroll = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
};

const HomePage = () => {
  const { testTracks, tracks } = useContext(TracksContext);

  const isSearching = Array.isArray(tracks);
  const currentTracks = isSearching ? tracks : testTracks;

  useEffect(() => {
    scroll();
  }, [tracks]);

  return (
    <S.Container withoutResults={(tracks?.length === 0)}>
      {
        !isSearching && <Banner />
      }
      {
        (isSearching && (tracks.length === 0)) && (
          <>
            <RiQuestionMark
              size="10vh"
              color="white"
            />
            <Text>Hmm, nada por aquí...</Text>
          </>
        )
      }
      {
        (currentTracks.length > 0) && (
          <S.ResultsContainer>
            {
              currentTracks.map(({ album, name, artists, id }) => (
                <TrackCard
                  imageUrl={album.images[1].url}
                  trackTitle={name}
                  artistName={artists[0].name}
                  id={id}
                  key={id}
                />
              ))
            }
          </S.ResultsContainer>
        )
      }
      {
        (tracks && tracks.length > 0) && <Pager />
      }
    </S.Container>
  );
};

export default HomePage;
