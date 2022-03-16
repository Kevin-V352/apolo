/* eslint-disable max-len */
import { BiReset, BiVolumeFull, BiVolumeMute } from 'react-icons/bi';
import { RiPauseMiniFill, RiPlayMiniFill, RiSpotifyFill } from 'react-icons/ri';
import styled, { css } from 'styled-components';

import { lg, xl, maxWidth } from '../../shared/breakpoints';
import { ellipsisTextStyles, pressAnimation } from '../../shared/sharedStyles';
import { Text } from '../../shared/StylizedComponents';

interface WrapperProps {
  gridPosition: 'pb' | 'vb'
  marginBottom?: string;
};

interface IconProps {
  disabled: boolean;
};

const makeLongShadow = (color: string, size: string) => {
  let shadow = `0 0 0 ${size} ${color}`;

  for (let i = 0; i < 1024; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }
  return shadow;
};

const iconStyles = css<IconProps>`
  font-size: 3rem;
  pointer-events: none;
  ${({ theme, disabled }) => (`
    color: ${disabled ? theme.quinaryColor : theme.primaryColor};
    ${!disabled && (`
      ${pressAnimation}
      pointer-events: auto;

      @media screen and (min-width: ${xl}) {
        :hover {
          color: ${theme.secondaryColor};
        };
      };
    `)};
  `)}
`;

const containerStyles = css`
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.tertiaryColor};
`;

export const timeContainerStyles = css`
  width: 100%;
  height: var(--secondary-font-size);
`;

export const timeTextStyles = css`
  text-align: center;
  line-height: 1;
`;

export const trackImageStyles = css`
  width: 6rem;
  height: 6rem;
  grid-area: i;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const titleContainerStyles = css`
  grid-area: t;
  width: 100%;
  height: 2.1rem;
`;

export const artistsContainerStyles = css`
  grid-area: ar;
  width: 100%;
  height: 1.6rem;
  align-self: flex-start;
`;

export const currentTimeContainerStyles = css`
  ${timeContainerStyles}
  grid-area: ct;
`;

export const durationContainerStyles = css`
  ${timeContainerStyles}
  grid-area: d;
`;

export const titleTextStyles = css`
  ${ellipsisTextStyles}
  font-weight: bold;
`;

export const artistsTextStyles = css`
  ${ellipsisTextStyles}
  font-weight: bold;
  font-size: var(--tertiary-font-size);
  color: ${({ theme }) => theme.secondaryColor};
`;

export const Container = styled.div`
  display: grid;
  padding: 1rem;
  box-sizing: border-box;
  grid-column-gap: 1rem;
  grid-template-rows: 3rem 3rem 1.6rem;
  grid-template-columns: 5rem 1fr 3rem 6rem 3rem 1fr 5rem;
  grid-template-areas:
    'es2 es2 s  pp r  es3 es3'
    'es2 es2 s  pp r  es3 es3'
    'ct  pb  pb pb pb pb  d  '
  ;

  ${containerStyles}
  
  @media screen and (min-width: ${lg}) and (orientation: landscape) {
    padding: 1rem 4rem 1rem 4rem;
    grid-template-columns: 6rem calc((100% - 70rem) / 2) 5rem 10rem 3rem 6rem 3rem 10rem 5rem 1fr 3rem 8rem;
    grid-template-areas:
      'i   t   es2 es2 s  pp r  es3 es3 es3 vi  vb'
      'i   ar  es2 es2 s  pp r  es3 es3 es3 vi  vb'
      'es1 es1 ct  pb  pb pb pb pb  d   es4 es4 es4'
    ;
  };

  @media screen and (min-width: ${maxWidth}) {
    grid-template-columns: 6rem minmax(auto, 310px) 5rem 10rem 3rem 6rem 3rem 10rem 5rem minmax(auto, 270px) 3rem 8rem;
  };
`;

export const ErrorContainer = styled.div`
  height: 9.2rem;
  display: flex;
  ${containerStyles}  
`;

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 0.4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  transition: var(--primary-transition);
  grid-area: ${({ gridPosition }) => gridPosition};
  margin-bottom: ${({ marginBottom }) => marginBottom};

  :hover {
    height: 1.6rem;
  };
`;

export const ProgressBar = styled.input.attrs({
  type: 'range',
  step: 'any'
})`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  appearance: none;
  background: transparent;
  margin: 0;
  cursor: pointer;

  :focus {
    outline: none;
  };

  //DISABLED

  :disabled {

    //Chrome, Safari, Opera, Edge
    ::-webkit-slider-thumb {
      background: ${({ theme }) => theme.quinaryColor};
    };

    ::-webkit-slider-runnable-track {
      background-color: ${({ theme }) => theme.quinaryColor};
    };

    //Firefox
    ::-moz-range-thumb {
      background: ${({ theme }) => theme.quinaryColor};
    };
  };

  //ENABLED

  //Chrome, Safari, Opera, Edge
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.secondaryColor};
  };

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1.6rem;
    height: 1.6rem;
    margin-top: -0.6rem;
    border-radius: 100%;
    ${({ theme }) => (`
      background: ${theme.secondaryColor};
      box-shadow: ${makeLongShadow(theme.primaryColor, '-0.6rem')};
    `)}
  };

  //Firefox
  ::-moz-range-track {
    width: 100%;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.primaryColor};
  };

  ::-moz-range-thumb {
    border: none;
    background: ${({ theme }) => theme.secondaryColor};
  };

  ::-moz-range-progress {
    height: 0.4rem;
    background: ${({ theme }) => theme.secondaryColor};
  };
`;

export const ErrorMessage = styled(Text)`
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryColor}
`;

export const PlayIcon = styled(RiPlayMiniFill)`
  ${iconStyles}
  grid-area: pp;
  font-size: 6rem;
`;

export const PauseIcon = styled(RiPauseMiniFill)`
  ${iconStyles}
  grid-area: pp;
  font-size: 6rem;
`;

export const ResetIcon = styled(BiReset)`
  ${iconStyles}
  grid-area: r;
`;

export const SpotifyIcon = styled(RiSpotifyFill)`
  ${iconStyles}
  grid-area: s;
`;

export const VolumeIcon = styled(BiVolumeFull)`
  ${iconStyles}
  grid-area: vi;
`;

export const MuteVolumeIcon = styled(BiVolumeMute)`
  ${iconStyles}
  grid-area: vi;
`;
