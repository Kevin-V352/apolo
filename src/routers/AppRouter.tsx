import { Route, Routes } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import HomePage from '../pages/HomePage/HomePage';

const AppRouter = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </>
);

export default AppRouter;
