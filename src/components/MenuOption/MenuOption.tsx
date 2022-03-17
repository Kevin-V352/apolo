import * as aiIcons from 'react-icons/ai';

import { redirector } from '../../helpers/redirectors';
import { MenuItem } from '../../interfaces/appInterfaces';
import { Text } from '../../shared/StylizedComponents';
import * as S from './MenuOptionElements';

interface MenuOptionProps {
  option: MenuItem;
};

const MenuOption = ({ option: { name, icon, url } }: MenuOptionProps) => {
  // @ts-ignore: Unreachable code error
  const Icon = aiIcons[icon];

  return (
    <S.Container
      onClick={() => redirector(url)}
    >
      <Icon
        size="4rem"
        color="white"
      />
      <Text>{name}</Text>
    </S.Container>
  );
};

export default MenuOption;
