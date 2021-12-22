import Banner from '../../components/Banner/Banner';
import TrackCard from '../../components/TrackCard/TrackCard';
import useDefaultList from '../../hooks/useDefaultList';
import AlertPage from '../AlertPage/AlertPage';
import * as S from './HomePageElements';

const HomePage = () => {
  const { defaultTracks, error } = useDefaultList();

  if (error) {
    return (
      <AlertPage
        type="error"
        message={error}
      />
    );
  };

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
