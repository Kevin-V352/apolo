import styled, { css } from 'styled-components';

import { Text } from '../../shared/StylizedComponents';

interface ImageProps {
  imageLoaded: boolean;
};

const textStyles = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 15vw;
  overflow: hidden;
  height: min-content;
`;

export const trackNameSkeletonStyles = css`
  height: 3vh;
  width: 15vw;
`;

export const artistNameSkeletonStyles = css`
  height: 2vh;
  width: 15vw;
`;

export const imageSkeletonStyles = css`
  width: 17vw;
  height: 40vh;
  position: absolute;
  transform: scaleX(1.05);
  top: 0;
`;

export const Container = styled.div`
  width: 17vw;
  height: 49vh;
  border-radius: 1vh;
  overflow: hidden;
  position: relative;
  transition: var(--primary-transition);
  background-color: ${({ theme }) => theme.tertiaryColor};
  :hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img<ImageProps>`
  width: 17vw;
  height: 40vh;
  transition: 0.4s;
  opacity: ${({ imageLoaded }) => (imageLoaded ? '1' : '0')};
`;

export const InformationContainer = styled.div`
  height: 9vh;
  display: grid;
  width: 15vw;
  margin: -0.8vh 1vw 0 1vw;
  align-items: center;
  grid-template-rows: 4vh 2.72vh;
  align-content: center;
`;

export const TrackName = styled(Text)`
  ${textStyles}
`;

export const ArtistName = styled(Text)`
  font-weight: bold;
  font-size: var(--tertiary-font-size);
  color: ${({ theme }) => theme.secondaryColor};
  ${textStyles}
`;
