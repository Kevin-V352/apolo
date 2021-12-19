import { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const expandAnimation = css`
  transition: var(--primary-transition);
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(1);
  }
`;

export const pressAnimation = css`
  :active {
    transform: scale(0.9);
    transition: 0.2s;
  }
`;
