import { MenuItem } from '../../interfaces/appInterfaces';
import MenuOption from '../MenuOption/MenuOption';
import * as S from './DropdownMenuElements';

interface DropdownMenuProps {
  isOpen: boolean;
  options: MenuItem[];
  closeMenu: () => void;
};

const DropdownMenu = ({ isOpen, options, closeMenu }: DropdownMenuProps) => {
  if (isOpen) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'visible';

  return (
    <S.Container
      isOpen={isOpen}
    >
      <S.CloseIcon onClick={closeMenu} />
      {
          options.map((option) => (
            <MenuOption
              option={option}
              key={option.name}
            />
          ))
        }
    </S.Container>
  );
};

export default DropdownMenu;
