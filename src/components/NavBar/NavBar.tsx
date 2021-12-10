import { AiFillGithub } from 'react-icons/ai';
import { useTheme } from 'styled-components';

import { Title } from '../../shared/StylizedComponents';
import SearchBar from '../SearchBar/SearchBar';
import * as S from './NavBarElements';

const NavBar = () => {
  const { primaryColor } = useTheme();

  return (
    <S.Container>
      <Title>APOLO</Title>
      <SearchBar />
      <AiFillGithub
        color={primaryColor}
        size="7vh"
      />
      <AiFillGithub
        color={primaryColor}
        size="7vh"
      />
    </S.Container>
  );
};

export default NavBar;
