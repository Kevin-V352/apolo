import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme/theme';
import AudioPlayer from './AudioPlayer';

Object.defineProperty(HTMLMediaElement.prototype, 'play', new Promise<void>(() => {}));
Object.defineProperty(HTMLMediaElement.prototype, 'pause', () => {});

describe('Conditional rendering of buttons', () => {
  let component: RenderResult;
  // eslint-disable-next-line max-len
  const testAudioUrl = 'https://p.scdn.co/mp3-preview/7648371454ca4f0dd005990ec63fa0d9ea342845?cid=609b9c52232349eea936f3635830fce3';

  beforeEach(() => {
    component = render(
      <ThemeProvider theme={theme}>
        <AudioPlayer
          audioUrl={testAudioUrl}
          externalUrl="https://open.spotify.com/track/4OdHYN8JT2t1jn5bH8lQWg"
          imageUrl="https://i.scdn.co/image/ab67616d0000b2738443a724ced4e3bef303fb7a"
        />
      </ThemeProvider>
    );
  });

  test('Switch between play and pause', async () => {
    const pauseButton = component.queryByTestId('pauseButton');
    const playButton = component.queryByTestId('playButton');

    expect(playButton).not.toBeNull();
    expect(pauseButton).toBeNull();

    await waitFor(() => fireEvent.click(playButton!));

    expect(component.queryByTestId('playButton')).toBeNull();
    expect(component.queryByTestId('pauseButton')).not.toBeNull();
  });
});
