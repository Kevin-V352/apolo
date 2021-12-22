import styled, { css } from 'styled-components';

const textStyles = css`
  line-height: 80%;
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
  height: 6vh;
  ${textContainerStyles}
`;

export const infoContainerStyles = css`
  height: var(--secondary-font-size);
  ${textContainerStyles}
`;

export const titleTextStyles = css`
  font-size: var(--primary-font-size);
  ${textStyles}
`;

export const infoTextStyles = css`
  ${textStyles}
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
