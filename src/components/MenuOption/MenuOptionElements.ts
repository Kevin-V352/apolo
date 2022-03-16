import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: min-content auto;
  gap: 1rem;
  padding: 0.5rem 0 0.5rem 0;
  align-items: center;
  box-sizing: border-box;
  border-top: ${({ theme }) => theme.secondaryColor} 0.2rem solid;
`;
