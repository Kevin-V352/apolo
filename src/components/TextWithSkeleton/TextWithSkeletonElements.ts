import styled, { css } from 'styled-components';

import { CustomStyles } from '../../types/appTypes';

interface ContainerProps {
  customStyles: CustomStyles;
};

export const skeletonStyles = css`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  ${({ customStyles }) => customStyles}
`;
