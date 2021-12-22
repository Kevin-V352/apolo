import { useContext } from 'react';

import { Route, Routes } from 'react-router-dom';

import { AuthContext } from '../contexts/authContext/AuthContext';
import Alert from '../pages/Alert/Alert';
import TracksRouter from './TracksRouter';

const AuthRouter = () => {
  const { status, error } = useContext(AuthContext);

  const renderSwitch = () => {
    switch (status) {
      case 'checking':
        return <Route path="*" element={<Alert type="load" />} />;

      case 'authenticated':
        return <Route path="*" element={<TracksRouter />} />;

      default:
        return <Route path="*" element={<Alert type="error" message={error!} />} />;
    };
  };

  return (
    <Routes>
      {renderSwitch()}
    </Routes>
  );
};

export default AuthRouter;
