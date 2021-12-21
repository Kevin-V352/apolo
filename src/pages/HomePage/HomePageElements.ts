import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  min-height: calc(88vh);
  padding-top: 12vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 17vw);
  grid-template-rows: calc(39vh - 4vw) 49vh;
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;
  place-items: center;
  justify-content: center;
`;
