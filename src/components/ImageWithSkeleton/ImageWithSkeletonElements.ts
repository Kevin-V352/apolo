import styled, { css } from 'styled-components';

import { CustomStyles } from '../../types/appTypes';

interface ContainerProps {
  customStyles: CustomStyles;
};

interface ImageProps {
  imageLoaded: boolean;
};

export const skeletonStyles = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  background-color: ${({ theme }) => theme.tertiaryColor};
  line-height: 1;
  ${({ customStyles }) => customStyles}
`;

export const Image = styled.img<ImageProps>`
  height: 100%;
  width: 100%;
  transition: 0.4s;
  object-fit: stretch;
  opacity: ${({ imageLoaded }) => (imageLoaded ? '1' : '0')};
`;
