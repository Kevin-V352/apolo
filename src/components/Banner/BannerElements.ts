import styled from 'styled-components';

import headerBackgroundImage from '../../assets/images/header-background.webp';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  width: 93vw;
  height: 33vh;
  grid-column: 1/6;
  border-radius: 1vh;
  background: url(${headerBackgroundImage}) no-repeat center center fixed;
`;
