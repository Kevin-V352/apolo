import styled from 'styled-components';

import headerBackgroundImage from '../../assets/images/header-background.webp';
import { Text, Title } from '../../shared/StylizedComponents';

export const Container = styled.div`
  width: 100%;
  background: url(${headerBackgroundImage}) no-repeat;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0 2rem 0;
  border-radius: var(--border-radius);
`;

export const AppTitle = styled(Title)`
  font-family: 'Library3';
  font-size: 4rem;
  line-height: 1;
`;

export const Description = styled(Text)`
  text-align: center;
`;
