import { redirector } from '../../helpers/redirectors';
import usePlayer from '../../hooks/usePlayer';
import useResponsive from '../../hooks/useResponsive';
import ImageWithSkeleton from '../ImageWithSkeleton/ImageWithSkeleton';
import TextWithSkeleton from '../TextWithSkeleton/TextWithSkeleton';
import * as S from './AudioPlayerElements';

interface AudioPlayerProps {
  trackTitle: string;
  artists: string;
  imageUrl: string | undefined | 'pending';
  audioUrl: string | null | 'pending';
  externalUrl: string;
};

const AudioPlayer = (props: AudioPlayerProps) => {
  const {
    trackTitle,
    artists,
    audioUrl,
    externalUrl,
    imageUrl
  } = props;

  const player = usePlayer(audioUrl, trackTitle, artists, imageUrl);

  const {
    currentTime,
    trackPercentage,
    volumePercentage,
    duration,
    loading,
    status,
    muted,
    control,
    updateTimeManually,
    updateVolume,
    muteAudio
  } = player;

  const { size } = useResponsive();

  if (!audioUrl) {
    return (
      <S.ErrorContainer>
        <S.ErrorMessage>
          Vista previa no disponible
        </S.ErrorMessage>
      </S.ErrorContainer>
    );
  };

  return (
    <S.Container>
      <S.Wrapper
        gridPosition="pb"
      >
        <S.ProgressBar
          value={trackPercentage}
          onChange={(e) => updateTimeManually(e.target.value)}
          disabled={loading}
        />
      </S.Wrapper>
      {
        (size === 'large') && (
          <>
            <ImageWithSkeleton
              url={imageUrl}
              customStyles={S.trackImageStyles}
            />
            <TextWithSkeleton
              text={trackTitle}
              loading={!trackTitle}
              customTextStyles={S.titleTextStyles}
              customContainerStyles={S.titleContainerStyles}
            />
            <TextWithSkeleton
              text={artists}
              loading={!artists}
              customTextStyles={S.artistsTextStyles}
              customContainerStyles={S.artistsContainerStyles}
            />
          </>
        )
      }
      <S.SpotifyIcon
        onClick={() => redirector(externalUrl)}
        disabled={loading}
        data-testid="spotifyLink"
      />
      {
        (status === 'playing')
          ? (
            <S.PauseIcon
              onClick={() => control('pause')}
              disabled={loading}
              data-testid="pauseButton"
            />
          )
          : (
            <S.PlayIcon
              onClick={() => control('play')}
              disabled={loading}
              data-testid="playButton"
            />
          )
      }
      <S.ResetIcon
        onClick={() => control('reset')}
        disabled={loading}
        data-testid="resetButton"
      />
      <TextWithSkeleton
        text={currentTime}
        loading={!currentTime}
        customTextStyles={S.timeTextStyles}
        customContainerStyles={S.currentTimeContainerStyles}
      />
      <TextWithSkeleton
        text={duration}
        loading={!duration}
        customTextStyles={S.timeTextStyles}
        customContainerStyles={S.durationContainerStyles}
      />
      {
        (size === 'large') && (
          <>
            {
              muted
                ? (
                  <S.MuteVolumeIcon
                    disabled={loading}
                    onClick={() => muteAudio(!muted)}
                  />
                )
                : (
                  <S.VolumeIcon
                    disabled={loading}
                    onClick={() => muteAudio(!muted)}
                  />
                )
            }
            <S.Wrapper
              gridPosition="vb"
              marginBottom="0rem"
            >
              <S.ProgressBar
                value={muted ? 0 : volumePercentage}
                onChange={(e) => updateVolume(e.target.value)}
                disabled={loading}
              />
            </S.Wrapper>
          </>
        )
      }
    </S.Container>
  );
};

export default AudioPlayer;
