import styled, { css } from 'styled-components';

interface ContainerProps {
  loadedText: boolean;
};

export const lyricsSkeleton = css`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  align-self: flex-start;
  font-size: var(--secondary-font-size);
  overflow-y: ${({ loadedText }) => (loadedText ? 'scroll' : 'auto')};
  
  @media screen and (orientation: landscape) {
    grid-area: le;
  };
`;
