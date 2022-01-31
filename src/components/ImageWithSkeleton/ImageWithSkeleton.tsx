import { useState, memo, useEffect } from 'react';

import { GiCompactDisc } from 'react-icons/gi';
import { useTheme } from 'styled-components';

import { CustomStyles } from '../../types/appTypes';
import AppSkeleton from '../AppSkeleton/AppSkeleton';
import * as S from './ImageWithSkeletonElements';

interface ImageWithSkeletonProps {
  url: string | undefined | 'pending';
  customStyles?: CustomStyles;
  alt?: string;
};

const ImageWithSkeleton = ({ url, customStyles, alt }: ImageWithSkeletonProps) => {
  const [imageStatus, setImageStatus] = useState({
    loaded: !url,
    error: false
  });

  const { secondaryColor } = useTheme();

  useEffect(() => {
    setImageStatus({
      ...imageStatus,
      loaded: !url
    });
  }, [url]);

  return (
    <S.Container customStyles={customStyles}>
      {
        (!url || url === 'pending' || imageStatus.error)
          ? (
            <GiCompactDisc
              size="70%"
              color={secondaryColor}
              data-testid="fallback-icon"
            />
          )
          : (
            <S.Image
              src={url}
              imageLoaded={imageStatus.loaded}
              onLoad={() => setImageStatus({ ...imageStatus, loaded: true })}
              onError={() => setImageStatus({ ...imageStatus, error: true })}
              alt={alt}
            />
          )
      }
      {
        (!imageStatus.loaded || url === 'pending') && (
          <AppSkeleton
            customStyles={S.skeletonStyles}
          />
        )
      }
    </S.Container>
  );
};

export default memo(ImageWithSkeleton);
