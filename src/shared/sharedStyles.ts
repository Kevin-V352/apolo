import { css } from 'styled-components';

import { xl } from './breakpoints';

export const expandAnimation = css`
  @media screen and (min-width: ${xl}) {
    cursor: pointer;
    transition: var(--primary-transition);
    :hover {
      transform: scale(1.03);
    }
    :active {
      transform: scale(1);
    }
  };
`;

export const pressAnimation = css`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  :active {
    transform: scale(0.9);
    transition: 0.2s;
  }
`;

export const ellipsisTextStyles = css`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;
