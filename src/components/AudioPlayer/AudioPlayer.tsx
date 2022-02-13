import { memo } from 'react';

import { redirector } from '../../helpers/redirectors';
import usePlayer from '../../hooks/usePlayer';
import AppSkeleton from '../AppSkeleton/AppSkeleton';
import ImageWithSkeleton from '../ImageWithSkeleton/ImageWithSkeleton';
import * as S from './AudioPlayerElements';

interface AudioPlayerProps {
  imageUrl: string | undefined | 'pending';
  audioUrl: string | null | 'pending';
  externalUrl: string;
};

interface ControlsProps {
  status:
  | 'pending'
  | 'playing'
  | 'paused';
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
  onRedirect: () => void;
};

const areEqual = (prevProps: ControlsProps, nextProps: ControlsProps) => (
  !!(prevProps.status === nextProps.status)
);

const Controls = memo(({ status, onPlay, onPause, onReset, onRedirect }: ControlsProps) => (
  <>
    <S.SpotifyIcon
      onClick={onRedirect}
      data-testid="spotifyLink"
    />
    {
      (status === 'playing')
        ? (
          <S.PauseIcon
            onClick={onPause}
            data-testid="pauseButton"
          />
        )
        : (
          <S.PlayIcon
            onClick={onPlay}
            data-testid="playButton"
          />
        )
    }
    <S.ResetIcon
      onClick={onReset}
      data-testid="resetButton"
    />
  </>
), areEqual);

const AudioPlayer = ({ imageUrl, audioUrl, externalUrl }: AudioPlayerProps) => {
  const { percentage, status, control } = usePlayer(audioUrl);

  const renderSwitch = () => {
    switch (audioUrl) {
      case 'pending':
        return (
          <AppSkeleton
            customStyles={S.controlsSkeleton}
          />
        );

      case null:
        return (
          <S.ErrorMessage>
            Vista previa no disponible
          </S.ErrorMessage>
        );

      default:
        return (
          <>
            <Controls
              status={status}
              onPlay={() => control('play')}
              onPause={() => control('pause')}
              onReset={() => control('reset')}
              onRedirect={() => redirector(externalUrl)}
            />
            <S.ProgressBar
              width={percentage}
              data-testid="progressBar"
            />
          </>
        );
    };
  };

  return (
    <S.Container>
      <ImageWithSkeleton
        url={imageUrl}
        customStyles={S.trackImageStyles}
      />
      {renderSwitch()}
    </S.Container>
  );
};

export default AudioPlayer;
