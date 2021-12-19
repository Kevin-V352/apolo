import { useState, memo } from 'react';

import { CustomStyles } from '../../types/appTypes';
import AppSkeleton from '../AppSkeleton/AppSkeleton';
import * as S from './ImageWithSkeletonElements';

interface ImageWithSkeletonProps {
  url: string;
  customStyles: CustomStyles;
};

const ImageWithSkeleton = ({ url, customStyles }: ImageWithSkeletonProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <S.Container customStyles={customStyles}>
      <S.Image
        src={url}
        imageLoaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
      />
      {
        !imageLoaded && (
          <AppSkeleton
            customStyles={S.skeletonStyles}
          />
        )
      }
    </S.Container>
  );
};

export default memo(ImageWithSkeleton);
