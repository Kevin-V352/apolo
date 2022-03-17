import { AiFillGithub } from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';
import styled from 'styled-components';

import { lg } from '../../shared/breakpoints';
import { pressAnimation } from '../../shared/sharedStyles';
import { Title } from '../../shared/StylizedComponents';

export const Container = styled.nav`
  width: 100%;
  display: grid;
  justify-content: center;
  place-items: center;
  position: fixed;
  left: 0;
  background-color: #223750;
  z-index: 3;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  grid-template-columns: 4rem calc(100% - 10rem) 4rem;
  grid-template-areas: 't sb dm';
  box-shadow: 0px 3px 10px ${({ theme }) => theme.quaternaryColor};

  @media screen and (min-width: ${lg}) {
    padding: 1rem 4rem 1rem 4rem;
    grid-template-columns: 14rem minmax(auto, 960px) 6rem 4rem 4rem;
    grid-template-areas: 't sb es1 a gi';
  };
`;

export const AppTitle = styled(Title)`
  ${pressAnimation}
  font-family: 'Library3';
  font-size: 4rem;
  line-height: 1;
  grid-area: t;
`;

export const GithubIcon = styled(AiFillGithub)`
  ${pressAnimation}
  font-size: 4rem;
  grid-area: gi;
  color: ${({ theme }) => theme.primaryColor};
`;

export const MenuIcon = styled(IoIosMenu)`
  ${pressAnimation}
  font-size: 4rem;
  grid-area: dm;
  color: ${({ theme }) => theme.primaryColor};
`;
