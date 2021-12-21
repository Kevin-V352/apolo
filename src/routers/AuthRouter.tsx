import { useContext } from 'react';

import { Route, Routes } from 'react-router-dom';

import { AuthContext } from '../contexts/authContext/AuthContext';
import LoadingPage from '../pages/AlertPage/AlertPage';
import TracksRouter from './TracksRouter';

const AuthRouter = () => {
  const { status } = useContext(AuthContext);

  return (
    <Routes>
      {
        (status === 'checking')
          ? <Route path="*" element={<LoadingPage type="load" />} />
          : <Route path="*" element={<TracksRouter />} />
      }
    </Routes>
  );
};

export default AuthRouter;
