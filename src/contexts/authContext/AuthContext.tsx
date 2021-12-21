/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable camelcase */

import { createContext, FC, useEffect, useState } from 'react';

import { spotifyAuthAPI } from '../../api/spotifyAPI';

type AuthenticationStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface AuthContextProps {
  status: AuthenticationStatus;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: FC = ({ children }) => {
  const [status, setStatus] = useState<AuthenticationStatus>('checking');

  const getToken = async () => {
    try {
      const { data: { access_token } } = await spotifyAuthAPI;

      localStorage
        .setItem('token', JSON.stringify(access_token));

      setStatus('authenticated');
    } catch (error) {
      setStatus('not-authenticated');
    };
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <AuthContext.Provider value={{ status }}>
      {children}
    </AuthContext.Provider>
  );
};
