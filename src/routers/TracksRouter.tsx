import { Navigate, Route, Routes } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import HomePage from '../pages/HomePage/HomePage';
import SearchResults from '../pages/SearchResults/SearchResults';
import TrackDetails from '../pages/TrackDetails/TrackDetails';

const TracksRouter = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:query/:page" element={<SearchResults />} />
      <Route path="track-details/:id" element={<TrackDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
);

export default TracksRouter;
