import styled from 'styled-components';

import headerBackgroundImage from '../../assets/images/header-background.webp';
import { Text, Title } from '../../shared/StylizedComponents';

export const Container = styled.div`
  width: 93vw;
  height: calc(39vh - 4vw);
  border-radius: 1vh;
  background: url(${headerBackgroundImage}) no-repeat;
  grid-area: 1/1/2/6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const AuthorContainer = styled.div`
  position: absolute;
  display: flex;
  right: 2vh;
  bottom: 2vh;
  gap: 0.4vw;
  line-height: 80%;
`;

export const AppTitle = styled(Title)`
  font-family: 'Library3';
  font-size: 10vh;
`;

export const AuthorName = styled(Text)`
  font-weight: bold;
`;
