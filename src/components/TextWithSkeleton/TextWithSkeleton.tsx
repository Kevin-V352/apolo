import { Text } from '../../shared/StylizedComponents';
import { CustomStyles } from '../../types/appTypes';
import AppSkeleton from '../AppSkeleton/AppSkeleton';
import * as S from './TextWithSkeletonElements';

interface TextWithSkeletonProps {
  customContainerStyles?: CustomStyles;
  customTextStyles?: CustomStyles;
  loading: boolean;
  text: string;
};

const TextWithSkeleton = ({
  text,
  loading,
  customTextStyles,
  customContainerStyles
}: TextWithSkeletonProps) => (
  <S.Container
    customStyles={customContainerStyles}
  >
    {
      loading
        ? (
          <AppSkeleton
            customStyles={S.skeletonStyles}
            borderRadius
          />
        )
        : (
          <Text
            customStyles={customTextStyles}
          >
            {text}
          </Text>
        )
    }
  </S.Container>
);

export default TextWithSkeleton;
