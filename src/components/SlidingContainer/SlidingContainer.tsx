import parse from 'html-react-parser';

import { Text } from '../../shared/StylizedComponents';
import AppSkeleton from '../AppSkeleton/AppSkeleton';
import * as S from './SlidingContainerElements';

interface SlidingContainerProps {
  text: string | null
};

const SlidingContainer = ({ text }: SlidingContainerProps) => {
  const renderSwitch = () => {
    switch (text) {
      case 'pending':
        return (
          <AppSkeleton
            customStyles={S.lyricsSkeleton}
            borderRadius
          />
        );

      case null:
        return null;

      default:
        return (
          <Text>
            {parse(text!)}
          </Text>
        );
    }
  };

  return (
    <S.Container
      loadedText={(text !== 'pending' && text !== null)}
    >
      {renderSwitch()}
    </S.Container>
  );
};

export default SlidingContainer;
