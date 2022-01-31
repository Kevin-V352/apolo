import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { SearchProvider } from '../../contexts/authContext/SearchContext';
import theme from '../../theme/theme';
import SearchBar from './SearchBar';

test('Redirect after 1000ms of writing', async () => {
  const component = render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SearchProvider>
          <SearchBar />
        </SearchProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
  const searchInput = component.getByTestId('searchInput');

  userEvent.type(searchInput, 'Rise');

  expect(searchInput).toBeInTheDocument();

  await waitFor(() => expect(window.location.pathname).toEqual('/search/Rise/1'), { timeout: 1500 });
});
