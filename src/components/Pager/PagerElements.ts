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
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryColor};
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: grid;
  grid-column-gap: 1rem;
  justify-content: center;
  place-items: center;
  grid-template-columns: 3rem 2.5rem 3rem;
  grid-template-areas: 'al pi ar';
`;

export const PageIndicator = styled(Text)`
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: bold;
  font-size: 2.5rem;
  grid-area: pi;
`;

export const ArrowLeft = styled(MdOutlineKeyboardArrowLeft)`
  ${iconStyles}
  ${expandAnimation}
  grid-area: al;
`;

export const ArrowRight = styled(MdOutlineKeyboardArrowRight)`
  ${iconStyles}
  ${expandAnimation}
  grid-area: ar;
`;
