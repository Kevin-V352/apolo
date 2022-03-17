import { IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  width: 25rem;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  padding: 1rem;
  transition: var(--primary-transition);
  border-top-left-radius: var(--border-radius);
  right: ${({ isOpen }) => (isOpen ? '0' : '-25rem')};
  background-color: ${({ theme }) => theme.tertiaryColor};
`;

export const CloseIcon = styled(IoCloseOutline)`
  font-size: 4rem;
  margin: -1rem 0 0 -1rem;
  color: ${({ theme }) => theme.primaryColor};
`;
