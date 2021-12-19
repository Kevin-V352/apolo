import styled, { css } from 'styled-components';

const lineHeight = css`
  line-height: 80%;
`;

export const titleContainerStyles = css`
  height: 6vh;
  width: 100%;
`;

export const titleTextStyles = css`
  font-size: var(--primary-font-size);
  ${lineHeight}
`;

export const infoContainerStyles = css`
  height: var(--secondary-font-size);
  width: 100%;
`;

export const infoTextStyles = css`
  ${lineHeight}
`;

export const Container = styled.div`
  display: grid;
  padding-top: 12vh;
  height: 85vh;
  width: 100vw;
  grid-template-columns: repeat(2, 38vw);
  grid-template-rows: 8vh repeat(5, 3vh) 50vh;
  grid-column-gap: 2vw;
  justify-content: center;
  grid-row-gap: 2vh;
  align-items: center;
`;
