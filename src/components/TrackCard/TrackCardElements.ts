import styled, { css } from 'styled-components';

import { ellipsisTextStyles, expandAnimation } from '../../shared/sharedStyles';

interface ContainerProps {
  $loading: boolean;
};

export const imageStyles = css`
  width: 100%;
  aspect-ratio: 1/1 ;
`;

export const titleContainerStyles = css`
  height: 2.1rem;
`;

export const artistContainerStyles = css`
  height: 1.6rem;
`;

export const titleTextStyles = css`
  ${ellipsisTextStyles}
`;

export const artistTextStyles = css`
  ${ellipsisTextStyles}
  font-weight: bold;
  font-size: var(--tertiary-font-size);
  color: ${({ theme }) => theme.secondaryColor};
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--border-radius);
  background-color: ${({ theme }) => theme.tertiaryColor};
  ${({ $loading }) => !$loading && expandAnimation}
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
`;
