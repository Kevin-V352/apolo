import Skeleton from 'react-loading-skeleton';

import { CustomStyles } from '../../types/appTypes';
import * as S from './AppSkeletonElements';

interface AppSkeletonProps {
  customStyles: CustomStyles;
};

const AppSkeleton = ({ customStyles }: AppSkeletonProps) => (
  <S.Container
    customStyles={customStyles}
  >
    <Skeleton
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  </S.Container>
);

export default AppSkeleton;
