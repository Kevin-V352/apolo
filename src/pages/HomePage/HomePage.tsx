import Banner from '../../components/Banner/Banner';
import TrackCard from '../../components/TrackCard/TrackCard';
import useDefaultList from '../../hooks/useDefaultList';
import * as S from './HomePageElements';

const HomePage = () => {
  const defaultTracks = useDefaultList();

  return (
    <S.Container>
      <Banner />
      {
        defaultTracks.map(({ album, name, artists, id }) => (
          <TrackCard
            imageUrl={album.images[1].url}
            trackTitle={name}
            artistName={artists[0].name}
            id={id}
            key={id}
          />
        ))
      }
    </S.Container>
  );
};

export default HomePage;
