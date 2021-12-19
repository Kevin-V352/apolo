import { memo } from 'react';

import usePlayer from '../../hooks/usePlayer';
import AppSkeleton from '../AppSkeleton/AppSkeleton';
import ImageWithSkeleton from '../ImageWithSkeleton/ImageWithSkeleton';
import * as S from './AudioPlayerElements';

interface AudioPlayerProps {
  imageUrl: string;
  audioUrl: string | null | 'pending';
};

interface ControlsProps {
  status:
  | 'pending'
  | 'playing'
  | 'paused'
  | 'rebooted';
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
};

const areEqual = (prevProps: ControlsProps, nextProps: ControlsProps) => (
  !!(prevProps.status === nextProps.status)
);

const Controls = memo(({ status, onPlay, onPause, onReset }: ControlsProps) => (
  <>
    <S.PauseIcon
      onClick={onPause}
      $active={(status === 'paused')}
    />
    <S.PlayIcon
      onClick={onPlay}
      $active={(status === 'playing')}
    />
    <S.ResetIcon
      onClick={onReset}
      $active={(status === 'rebooted')}
    />
  </>
), areEqual);

const AudioPlayer = ({ imageUrl, audioUrl }: AudioPlayerProps) => {
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
            />
            <S.ProgressBar
              width={percentage}
            />
          </>
        );
    }
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
