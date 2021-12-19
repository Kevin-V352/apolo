import { Route, Routes } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import HomePage from '../pages/HomePage/HomePage';
import TrackDetails from '../pages/TrackDetails/TrackDetails';

const AppRouter = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="track-details/:id" element={<TrackDetails />} />
    </Routes>
  </>
);

export default AppRouter;
