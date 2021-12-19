import styled, { css } from 'styled-components';

import { expandAnimation } from '../../shared/sharedStyles';
import { Text } from '../../shared/StylizedComponents';

const textStyles = css`
  width: 15vw;
  white-space: nowrap;
  overflow: hidden visible;
  text-overflow: ellipsis;
  line-height: 80%;
`;

export const imageStyles = css`
  width: 17vw;
  height: 40vh;
`;

export const titleContainerStyles = css`
  height: 3vh;
  width: 15vw;
`;

export const artistContainerStyles = css`
  height: 2vh;
  width: 15vw;
`;

export const titleTextStyles = css`
  height: 4vh;
  ${textStyles}  
`;

export const artistTextStyles = css`
  font-weight: bold;
  height: 3vh;
  font-size: var(--tertiary-font-size);
  color: ${({ theme }) => theme.secondaryColor};
  ${textStyles}
`;

export const Container = styled.div`
  width: 17vw;
  height: 49vh;
  border-radius: 1vh;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.tertiaryColor};
  ${expandAnimation}
`;

export const InformationContainer = styled.div`
  height: 9vh;
  display: grid;
  width: 15vw;
  margin: 0vh 1vw 0 1vw;
  align-items: center;
  grid-template-rows: 3vh 2vh;
  grid-row-gap: 1vh;
  align-content: center;
`;

export const TrackName = styled(Text)`
  ${textStyles}
`;
