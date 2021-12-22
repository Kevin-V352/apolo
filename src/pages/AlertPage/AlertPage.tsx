import { AiOutlineQuestion, AiOutlineExclamation } from 'react-icons/ai';
import { PuffLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import { Text } from '../../shared/StylizedComponents';
import * as S from './AlertPageElements';

interface AlertProps {
  type: 'load' | 'error' | 'not-found';
  message?: string;
};

const AlertPage = ({ type, message }: AlertProps) => {
  const { secondaryColor } = useTheme();

  // eslint-disable-next-line consistent-return
  const renderSwitch = () => {
    switch (type) {
      case 'load':
        return (
          <PuffLoader
            color={secondaryColor}
            size="12vh"
          />
        );

      case 'not-found':
        return (
          <>
            <AiOutlineQuestion
              size="12vh"
              color={secondaryColor}
            />
            <Text>{message}</Text>
          </>
        );

      default:
        return (
          <>
            <AiOutlineExclamation
              size="12vh"
              color={secondaryColor}
            />
            <Text>{message}</Text>
          </>
        );
    }
  };

  return (
    <S.Container>
      {renderSwitch()}
    </S.Container>
  );
};

export default AlertPage;
