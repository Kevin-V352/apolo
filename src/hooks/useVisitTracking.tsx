import { useEffect } from 'react';

import ReactGA from 'react-ga4';

const useVisitTracking = () => {
  const { REACT_APP_GOOGLE_TRACKING_ID } = process.env;

  useEffect(() => {
    ReactGA.initialize(REACT_APP_GOOGLE_TRACKING_ID!);
    ReactGA.send('/');
  }, []);
};

export default useVisitTracking;
