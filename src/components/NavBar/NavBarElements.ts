import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 100%;
  height: 12vh;
  display: grid;
  grid-template-columns: 15vw 68vw 5vw 5vw;
  padding: 0 3vw 0 3vw;
  place-items: center;
  position: fixed;
  background-color: #223750;
  z-index: 2;
`;
