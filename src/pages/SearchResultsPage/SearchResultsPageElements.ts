import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(88vh);
  padding-top: 12vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 17vw);
  grid-auto-rows: 49vh;
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;
  place-items: center;
  justify-content: center;
  padding: 2vw 0 2vw 0;
`;
