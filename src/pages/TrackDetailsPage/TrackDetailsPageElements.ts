import styled, { css } from 'styled-components';

import { lg, maxWidth } from '../../shared/breakpoints';

const textStyles = css`
  white-space: nowrap;
`;

const disableScrollbar = css`
  ::-webkit-scrollbar {
    display: none;
  }
`;

const textContainerStyles = css`
  width: 100%;
  overflow-x: scroll;
  ${disableScrollbar}
`;

export const titleContainerStyles = css`
  ${textContainerStyles}
  height: 4rem;
`;

export const infoContainerStyles = css`
  ${textContainerStyles}
  height: 2.1rem;
`;

export const titleTextStyles = css`
  font-size: var(--primary-font-size);
  font-weight: bold;
  ${textStyles}
`;

export const infoTextStyles = css`
  ${textStyles}
`;

export const trackImageStyles = css`
  width: 100%; 
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: var(--border-radius);
  
  @media screen and (max-width: ${lg}) and (orientation: landscape) {
    height: 20.5rem;
    grid-area: i;
  };

  @media screen and (min-width: ${lg}) and (orientation: landscape) {
    height: calc(100vh - 19.4rem);
    grid-area: i;
  };
`;

export const Container = styled.div`
  display: grid;
  padding: 8rem 1rem 11.2rem 1rem;
  width: 100vw;
  justify-content: center;
  grid-row-gap: 1rem;
  align-items: center;
  grid-template-columns: 100%;
  box-sizing: border-box;
  max-width: ${maxWidth};

  @media screen and (max-width: ${lg}) and (orientation: landscape) {
    grid-template-columns: auto 1fr;
    grid-template-rows: 4rem 0.2rem repeat(5, 2.1rem);
    grid-column-gap: 2rem;
    grid-template-areas: 
      'i  t'
      'i  sl'
      'i  a'
      'i  ar'
      'i  rd'
      'i  d'
      'i  l'
      'le le'
    ;
  };

  @media screen and (min-width: ${lg}) and (orientation: landscape) {
    grid-template-columns: auto 1fr;
    grid-template-rows: 4rem 0.2rem repeat(5, 2.1rem) calc(100vh - 41.1rem);
    grid-column-gap: 2rem;
    padding: 8rem 4rem 2rem 4rem;
    grid-template-areas: 
      'i  t'
      'i  sl'
      'i  a'
      'i  ar'
      'i  rd'
      'i  d'
      'i  l'
      'i le'
    ;
  };
`;

export const SeparatorLine = styled.hr`
  width: 100%;
  height: 0.2rem;
  border: none;
  margin: 0;
  background-color: ${({ theme }) => theme.primaryColor};
`;
