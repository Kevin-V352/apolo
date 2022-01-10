import { memo } from 'react';

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
  const navigate = useNavigate();

  return (
    <S.Container
      onClick={() => navigate(`/track-details/${id}`)}
    >
      <ImageWithSkeleton
        url={imageUrl}
        customStyles={S.imageStyles}
      />
      <S.InformationContainer>
        <TextWithSkeleton
          loading={false}
          text={trackTitle}
          customContainerStyles={S.titleContainerStyles}
          customTextStyles={S.titleTextStyles}
        />
        <TextWithSkeleton
          loading={false}
          text={artistName}
          customContainerStyles={S.artistContainerStyles}
          customTextStyles={S.artistTextStyles}
        />
      </S.InformationContainer>
    </S.Container>
  );
};

export default memo(TrackCard, trackCardPropsAreEqual);
