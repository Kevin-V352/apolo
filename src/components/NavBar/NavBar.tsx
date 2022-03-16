import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import menuOptions from '../../data/dropDownMenuOptions';
import { redirector } from '../../helpers/redirectors';
import useResponsive from '../../hooks/useResponsive';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import SearchBar from '../SearchBar/SearchBar';
import * as S from './NavBarElements';

const NavBar = () => {
  const navigate = useNavigate();
  const { size } = useResponsive();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <S.Container>
      <S.AppTitle
        onClick={() => navigate('/')}
      >
        {
          (size === 'large') ? 'APOLO' : 'A'
        }
      </S.AppTitle>
      <SearchBar />
      {
        (size === 'large')
          ? (
            <S.GithubIcon
              onClick={() => redirector('https://github.com/Kevin-V352/apolo')}
              data-testid="githubIcon"
            />
          )
          : (
            <>
              <S.MenuIcon
                onClick={() => setOpen(!open)}
              />
              <DropdownMenu
                isOpen={open}
                closeMenu={() => setOpen(!open)}
                options={menuOptions}
              />
            </>
          )
      }
    </S.Container>
  );
};

export default NavBar;
