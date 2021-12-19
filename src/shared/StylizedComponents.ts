import styled from 'styled-components';

import { CustomStyles } from '../types/appTypes';

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
