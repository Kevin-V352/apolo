import { useContext } from 'react';

import { Route, Routes } from 'react-router-dom';

import { AuthContext } from '../contexts/authContext/AuthContext';
import AlertPage from '../pages/AlertPage/AlertPage';
import TracksRouter from './TracksRouter';

const AuthRouter = () => {
  const { status, error } = useContext(AuthContext);

  const renderSwitch = () => {
    switch (status) {
      case 'checking':
        return <Route path="*" element={<AlertPage type="load" />} />;

      case 'authenticated':
        return <Route path="*" element={<TracksRouter />} />;

      default:
        return <Route path="*" element={<AlertPage type="error" message={error!} />} />;
    };
  };

  return (
    <Routes>
      {renderSwitch()}
    </Routes>
  );
};

export default AuthRouter;
