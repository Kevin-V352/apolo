import { Navigate, Route, Routes } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import HomePage from '../pages/HomePage/HomePage';
import SearchResultsPage from '../pages/SearchResultsPage/SearchResultsPage';
import TrackDetailsPage from '../pages/TrackDetailsPage/TrackDetailsPage';

const TracksRouter = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="search/:query/:page" element={<SearchResultsPage />} />
      <Route path="track-details/:id" element={<TrackDetailsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
);

export default TracksRouter;
