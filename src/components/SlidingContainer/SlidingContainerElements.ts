import styled, { css } from 'styled-components';

interface ContainerProps {
  loadedText: boolean;
};

export const lyricsSkeleton = css`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div<ContainerProps>`
  width: 38vw;
  height: 42vh;
  align-self: flex-start;
  overflow-y: ${({ loadedText }) => (loadedText ? 'scroll' : 'auto')};
`;
