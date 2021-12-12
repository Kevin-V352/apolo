import styled from 'styled-components';

import headerBackgroundImage from '../../assets/images/header-background.webp';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 93vw;
  height: calc(39vh - 4vw);
  border-radius: 1vh;
  background: url(${headerBackgroundImage}) no-repeat center center fixed;
`;
