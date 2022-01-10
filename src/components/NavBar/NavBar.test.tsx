import { render, fireEvent, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme/theme';
import NavBar from './NavBar';

describe('Links redirect correctly', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NavBar />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  test('It is redirected to the start when pressing the app logo', () => {
    const appLogo = component.getByText('APOLO');

    fireEvent.click(appLogo);

    expect(window.location.pathname).toEqual('/');
  });

  test('Redirect to the repository by pressing the GitHub icon', () => {
    const githubIcon = component.getByTestId('githubIcon');

    window.open = jest.fn();

    fireEvent.click(githubIcon);

    expect(window.open).toBeCalledTimes(1);
  });
});
