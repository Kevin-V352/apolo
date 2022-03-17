import Banner from '../../components/Banner/Banner';
import TrackCard from '../../components/TrackCard/TrackCard';
import useDefaultList from '../../hooks/useDefaultList';
import useUpdateDocumentTitle from '../../hooks/useUpdateDocumentTitle';
import { DefaultContainer, TrackGrid } from '../../shared/StylizedComponents';
import AlertPage from '../AlertPage/AlertPage';

const HomePage = () => {
  const { defaultTracks, error } = useDefaultList();

  useUpdateDocumentTitle('APOLO', []);

  if (error) {
    return (
      <AlertPage
        type="error"
        message={error}
      />
    );
  };

  return (
    <DefaultContainer>
      <Banner />
      <TrackGrid>
        {
          defaultTracks.map(({ album, name, artists, id }) => (
            <TrackCard
              imageUrl={album.images[0].url}
              trackTitle={name}
              artistName={artists[0].name}
              id={id}
              key={id}
            />
          ))
        }
      </TrackGrid>
    </DefaultContainer>
  );
};

export default HomePage;
