import { AiOutlineQuestion, AiOutlineExclamation } from 'react-icons/ai';
import { PuffLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import * as S from './AlertPageElements';

interface AlertProps {
  type: 'load' | 'error' | 'not-found';
  message?: string;
};

const AlertPage = ({ type, message }: AlertProps) => {
  const { secondaryColor } = useTheme();

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
            <S.AlertMessage>
              {message}
            </S.AlertMessage>
          </>
        );

      default:
        return (
          <>
            <AiOutlineExclamation
              size="12vh"
              color={secondaryColor}
            />
            <S.AlertMessage>
              {message}
            </S.AlertMessage>
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
