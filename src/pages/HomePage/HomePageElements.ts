import styled from 'styled-components';

interface ContainerProps {
  isSearching: boolean;
};

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<ContainerProps>`
  min-height: calc(88vh);
  display: grid;
  grid-template-columns: repeat(5, 17vw);
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;
  place-items: center;
  justify-content: center;
  ${({ isSearching }) => (`
    grid-template-rows: ${isSearching ? 'none' : '33vh 49vh'};
    grid-auto-rows: ${isSearching ? '49vh' : 'none'};
    margin-bottom: ${isSearching ? '2vw' : 'none'};
  `)}
`;
