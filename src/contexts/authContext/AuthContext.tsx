/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable camelcase */

import { createContext, FC, useEffect, useState } from 'react';

import { spotifyAuthAPI } from '../../api/spotifyAPI';
import { errorHandler } from '../../helpers/errorHandlers';

type AuthenticationStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface AuthContextProps {
  status: AuthenticationStatus;
  error: null | string;
};

interface AuthContexState extends AuthContextProps{};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: FC = ({ children }) => {
  const [state, setState] = useState<AuthContexState>({
    status: 'checking',
    error: null
  });

  const getToken = async () => {
    try {
      const { data: { access_token } } = await spotifyAuthAPI;

      localStorage
        .setItem('token', JSON.stringify(access_token));

      setState({
        ...state,
        status: 'authenticated'
      });
    } catch (error) {
      setState({
        status: 'not-authenticated',
        error: errorHandler(error)
      });
    };
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state }}>
      {children}
    </AuthContext.Provider>
  );
};
