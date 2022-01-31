import { useNavigate } from 'react-router-dom';

import { redirector } from '../../helpers/redirectors';
import SearchBar from '../SearchBar/SearchBar';
import * as S from './NavBarElements';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.AppTitle
        onClick={() => navigate('/')}
      >
        APOLO
      </S.AppTitle>
      <SearchBar />
      <S.GithubIcon
        onClick={() => redirector('https://github.com/Kevin-V352/apolo')}
        data-testid="githubIcon"
      />
    </S.Container>
  );
};

export default NavBar;
