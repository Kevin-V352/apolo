import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 1.5vh;
  display: flex;
  width: 30vw;
  padding: 1vh;
  margin-right: 5vw;
  background-color: ${({ theme }) => theme.tertiaryColor};
`;

export const Input = styled.input`
  border: none;
  flex: 1;
  background: none;
  font-size: var(--secondary-font-size);
  color: ${({ theme }) => theme.primaryColor};
  :focus {
    outline: none;
  }
`;
