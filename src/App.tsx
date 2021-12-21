import { FC } from 'react';

import { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeProvider } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

import { AuthProvider } from './contexts/authContext/AuthContext';
import { SearchProvider } from './contexts/authContext/SearchContext';
import AuthRouter from './routers/AuthRouter';
import theme from './theme/theme';

const App = () => (
  <AppState>
    <AuthRouter />
  </AppState>
);

const AppState: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SkeletonTheme
      baseColor="#202020"
      highlightColor="#444"
      borderRadius={0}
    >
      <AuthProvider>
        <SearchProvider>
          {children}
        </SearchProvider>
      </AuthProvider>
    </SkeletonTheme>
  </ThemeProvider>
);

export default App;
