import { memo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ImageWithSkeleton from '../ImageWithSkeleton/ImageWithSkeleton';
import TextWithSkeleton from '../TextWithSkeleton/TextWithSkeleton';
import * as S from './TrackCardElements';

interface TrackCardProps {
  imageUrl?: string;
  trackTitle: string;
  artistName: string;
  id: string;
};

const trackCardPropsAreEqual = (prevProps: TrackCardProps, nextProps: TrackCardProps) => (
  (prevProps.id === nextProps.id)
);

const TrackCard = ({ imageUrl, trackTitle, artistName, id }: TrackCardProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  return (
    <S.Container
      onClick={() => navigate(`/track-details/${id}`)}
      $loading={loading}
    >
      <ImageWithSkeleton
        url={imageUrl}
        customStyles={S.imageStyles}
        onLoad={(loaded) => setLoading(!loaded)}
      />
      <S.InformationContainer>
        <TextWithSkeleton
          loading={loading}
          text={trackTitle}
          customContainerStyles={S.titleContainerStyles}
          customTextStyles={S.titleTextStyles}
        />
        <TextWithSkeleton
          loading={loading}
          text={artistName}
          customContainerStyles={S.artistContainerStyles}
          customTextStyles={S.artistTextStyles}
        />
      </S.InformationContainer>
    </S.Container>
  );
};

export default memo(TrackCard, trackCardPropsAreEqual);
