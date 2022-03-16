import styled from 'styled-components';

import { lg } from '../../shared/breakpoints';

interface ContainerProps {
  sizeIcons: string;
};

export const Container = styled.div<ContainerProps>`
  display: grid;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  border-radius: var(--border-radius);
  background-color: ${({ theme }) => theme.tertiaryColor};
  grid-template-columns: ${({ sizeIcons }) => `calc(100% - ${sizeIcons}) ${sizeIcons}`};
  grid-area: sb;

  @media screen and (min-width: ${lg}) {
    width: 70%;
  };
`;

export const Input = styled.input`
  border: none;
  flex: 1;
  background: none;
  font-size: var(--secondary-font-size);
  color: ${({ theme }) => theme.primaryColor};
  
  :focus {
    outline: none;
  };
`;
