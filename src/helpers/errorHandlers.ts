import axios from 'axios';

import errorDictionary from '../data/errorDictionary';

// eslint-disable-next-line import/prefer-default-export
export const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const errorStatus = error.response?.status;
    return (!errorStatus) ? errorDictionary['404'] : errorDictionary[errorStatus];
  };
  return errorDictionary['404'];
};
