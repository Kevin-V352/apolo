import styled from 'styled-components';

export const Title = styled.h1`
  font-size: var(--primary-font-size);
  font-weight: normal;
  margin: 0;
  color: ${({ theme }) => theme.primaryColor};
`;

export const Text = styled.p`
  font-size: var(--secondary-font-size);
  color: ${({ theme }) => theme.primaryColor};
  margin: 0;
`;
