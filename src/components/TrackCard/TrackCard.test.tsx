import { render, fireEvent, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme/theme';
import TrackCard from './TrackCard';

describe('TrackCard', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <TrackCard
            artistName="Three Days Grace"
            trackTitle="The End Is Not the Answer"
            imageUrl="https://i.scdn.co/image/ab67616d00001e028443a724ced4e3bef303fb7a"
            id="4OdHYN8JT2t1jn5bH8lQWg"
          />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  test('The content is rendered', () => {
    component.getByText('Three Days Grace');
    component.getByText('The End Is Not the Answer');
  });

  test('Component redirects to details when pressed', () => {
    const button = component.getByText('Three Days Grace');

    fireEvent.click(button);

    expect(window.location.pathname).toEqual('/track-details/4OdHYN8JT2t1jn5bH8lQWg');
  });
});
