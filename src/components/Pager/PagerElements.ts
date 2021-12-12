import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft
} from 'react-icons/md';
import styled, { css } from 'styled-components';

import { expandAnimation } from '../../shared/sharedStyles';
import { Text } from '../../shared/StylizedComponents';

interface ContainerProps {
  enoughContent: boolean;
};

const iconStyles = css`
  font-size: 5vh;
  color: ${({ theme }) => theme.primaryColor};
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 5vh 2vw 5vh;
  justify-content: center;
  place-items: center;
  margin-bottom: 2vw;
  ${({ enoughContent }) => (enoughContent && `
    position: absolute; 
    bottom: 0;
  `)}
`;

export const PageIndicator = styled(Text)`
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: bold;
  grid-column: 2/3;
`;

export const ArrowLeft = styled(MdOutlineKeyboardArrowLeft)`
  ${iconStyles}
  ${expandAnimation}
  grid-column: 1/2;
`;

export const ArrowRight = styled(MdOutlineKeyboardArrowRight)`
  ${iconStyles}
  ${expandAnimation}
  grid-column: 3/4;
`;
