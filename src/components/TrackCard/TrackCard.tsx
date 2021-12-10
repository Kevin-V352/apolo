import { useState } from 'react';

import AppSkeleton from '../AppSkeleton/AppSkeleton';
import * as S from './TrackCardElements';

interface TrackCardProps {
  imageUrl?: string;
  trackTitle: string;
  artistName: string;
};

const TrackCard = ({ imageUrl, trackTitle, artistName }: TrackCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <S.Container>
      <S.Image
        src={imageUrl}
        onLoad={() => setImageLoaded(true)}
        imageLoaded={imageLoaded}
      />
      {
        !imageLoaded && (
          <AppSkeleton
            customStyles={S.imageSkeletonStyles}
          />
        )
      }
      <S.InformationContainer>
        {
          imageLoaded
            ? (
              <>
                <S.TrackName>
                  {trackTitle}
                </S.TrackName>
                <S.ArtistName>
                  {artistName}
                </S.ArtistName>
              </>
            )
            : (
              <>
                <AppSkeleton
                  customStyles={S.trackNameSkeletonStyles}
                />
                <AppSkeleton
                  customStyles={S.artistNameSkeletonStyles}
                />
              </>
            )
        }
      </S.InformationContainer>
    </S.Container>
  );
};

export default TrackCard;
