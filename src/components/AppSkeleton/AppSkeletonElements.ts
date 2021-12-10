import styled from 'styled-components';

import { CustomStyles } from '../../types/appTypes';

interface ContainerProps {
  customStyles: CustomStyles;
};

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<ContainerProps>`
  line-height: 1;
  ${({ customStyles }) => customStyles}
`;
