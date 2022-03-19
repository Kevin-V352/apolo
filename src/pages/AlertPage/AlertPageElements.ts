import styled from 'styled-components';

import { Text } from '../../shared/StylizedComponents';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AlertMessage = styled(Text)`
  text-align: center;
`;
