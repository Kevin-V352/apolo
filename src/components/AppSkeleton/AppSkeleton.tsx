import Skeleton from 'react-loading-skeleton';

import { CustomStyles } from '../../types/appTypes';
import * as S from './AppSkeletonElements';

interface AppSkeletonProps {
  customStyles: CustomStyles;
  borderRadius?: boolean;
};

const AppSkeleton = ({ customStyles, borderRadius }: AppSkeletonProps) => (
  <S.Container
    customStyles={customStyles}
    data-testid="skeleton"
  >
    <Skeleton
      borderRadius={(borderRadius ? '1vh' : '0')}
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  </S.Container>
);

export default AppSkeleton;
