import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';

import { Title } from '../../shared/StylizedComponents';

export const Container = styled.nav`
  width: 100%;
  height: 12vh;
  display: grid;
  grid-template-columns: 10vw 73vw repeat(2, 5vw);
  padding: 0 3vw 0 3.5vw;
  place-items: center;
  position: fixed;
  background-color: #223750;
  z-index: 2;
`;

export const AppTitle = styled(Title)`
  font-family: 'Library3';
  justify-self: flex-start;
  cursor: pointer;
`;

export const GithubIcon = styled(AiFillGithub)`
  font-size: 7vh;
  grid-column: 4/5;
  justify-self: flex-end;
  color: ${({ theme }) => theme.primaryColor}
`;
