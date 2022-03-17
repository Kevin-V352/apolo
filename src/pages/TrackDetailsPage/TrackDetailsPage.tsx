import { useParams } from 'react-router-dom';

import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import ImageWithSkeleton from '../../components/ImageWithSkeleton/ImageWithSkeleton';
import SlidingContainer from '../../components/SlidingContainer/SlidingContainer';
import TextWithSkeleton from '../../components/TextWithSkeleton/TextWithSkeleton';
import useTrackDetails from '../../hooks/useTrackDetails';
import useUpdateDocumentTitle from '../../hooks/useUpdateDocumentTitle';
import AlertPage from '../AlertPage/AlertPage';
import * as S from './TrackDetailsPageElements';

const TrackDetailsPage = () => {
  const { id } = useParams();

  const {
    title,
    album,
    image,
    artists,
    releaseDate,
    duration,
    audioUrl,
    lyrics,
    externalUrl,
    loading,
    error
  } = useTrackDetails(id!);

  useUpdateDocumentTitle(`APOLO | ${title} | ${artists}`, [title, artists]);

  const items = [
    `Álbum: ${album}`,
    `Artistas: ${artists}`,
    `Fecha de lanzamiento: ${releaseDate}`,
    `Duración: ${duration}`
  ];

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
      <ImageWithSkeleton
        url={image}
        customStyles={S.trackImageStyles}
      />
      <AudioPlayer
        trackTitle={title}
        artists={artists}
        audioUrl={audioUrl}
        externalUrl={externalUrl}
        imageUrl={image}
      />
      <TextWithSkeleton
        text={title}
        loading={loading}
        customContainerStyles={S.titleContainerStyles}
        customTextStyles={S.titleTextStyles}
      />
      {
        !loading
          ? <S.SeparatorLine />
          : <div />
      }
      {
        items.map((text) => (
          <TextWithSkeleton
            key={text}
            text={text}
            loading={loading}
            customContainerStyles={S.infoContainerStyles}
            customTextStyles={S.infoTextStyles}
          />
        ))
      }
      <TextWithSkeleton
        text={`Letra: ${(lyrics ? '' : 'No disponible')}`}
        loading={loading}
        customContainerStyles={S.infoContainerStyles}
        customTextStyles={S.infoTextStyles}
      />
      <SlidingContainer text={lyrics} />
    </S.Container>
  );
};

export default TrackDetailsPage;
