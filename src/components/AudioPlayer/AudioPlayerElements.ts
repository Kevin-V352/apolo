import { RiPauseFill, RiPlayFill, RiRestartLine, RiSpotifyFill } from 'react-icons/ri';
import styled, { css } from 'styled-components';

import { pressAnimation } from '../../shared/sharedStyles';
import { Text } from '../../shared/StylizedComponents';

interface ProgressBarProps {
  width: number;
};

const iconStyles = css`
  font-size: var(--primary-font-size);
  color: ${({ theme }) => theme.primaryColor};
  :active {
    color: ${({ theme }) => theme.secondaryColor};
  };
  ${pressAnimation}
`;

export const trackImageStyles = css`
  width: 38vw;
  height: 77vh;
  grid-area: 1/1/2/4;
`;

export const controlsSkeleton = css`
  width: 100%;
  height: 6vh;
  grid-area: 2/1/3/4;
`;

export const Container = styled.div`
  width: 38vw;
  height: 85vh;
  display: grid;
  grid-template-columns: repeat(3, calc(38vw / 3));
  grid-template-rows: 77vh 8vh;
  grid-area: 1/1/8/2;
  place-items: center;
  overflow: hidden;
  border-top-left-radius: 1vh;
  border-top-right-radius: 1vh;
  position: relative;
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  height: 0.5vh;
  position: absolute;
  bottom: 8vh;
  justify-self: flex-start;
  background-color: ${({ theme }) => theme.secondaryColor};
  width: ${({ width }) => `${width}%`};
`;

export const ErrorMessage = styled(Text)`
  grid-area: 2/1/3/4;
`;

export const PlayIcon = styled(RiPlayFill)`
  ${iconStyles}
`;

export const PauseIcon = styled(RiPauseFill)`
  ${iconStyles}
`;

export const ResetIcon = styled(RiRestartLine)`
  ${iconStyles}
`;

export const SpotifyIcon = styled(RiSpotifyFill)`
  ${iconStyles}
`;
