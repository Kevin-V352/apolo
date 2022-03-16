import styled from 'styled-components';

import { CustomStyles } from '../types/appTypes';
import { lg, maxWidth } from './breakpoints';

interface TextProps {
  customStyles?: CustomStyles;
};

export const Title = styled.h1`
  font-size: var(--primary-font-size);
  font-weight: normal;
  margin: 0;
  color: ${({ theme }) => theme.primaryColor};
`;

export const Text = styled.p<TextProps>`
  font-size: var(--secondary-font-size);
  margin: 0;
  color: ${({ theme }) => theme.primaryColor};
  ${({ customStyles }) => customStyles}
`;

export const TrackGrid = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  };

  @media screen and (min-width: ${lg}) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  };
`;

export const DefaultContainer = styled.div`
  width: 100vw;
  max-width: ${maxWidth};
  min-height: 100vh;
  padding: 8rem 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;

  @media screen and (min-width: ${lg}) {
    padding: 8rem 4rem 2rem 4rem;
  };
`;
