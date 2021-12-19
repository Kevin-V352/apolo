import { FC } from 'react';

import { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeProvider } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

import { TracksProvider } from './contexts/tracksContext/TracksContext';
import AppRouter from './routers/AppRouter';
import theme from './theme/theme';

const App = () => (
  <AppState>
    <AppRouter />
  </AppState>
);

const AppState: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SkeletonTheme
      baseColor="#202020"
      highlightColor="#444"
      borderRadius={0}
    >
      <TracksProvider>
        {children}
      </TracksProvider>
    </SkeletonTheme>
  </ThemeProvider>
);

export default App;
