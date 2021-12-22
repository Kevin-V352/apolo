type ErrorDictionary = { [index: string]: string };

const errorDictionary: ErrorDictionary = {
  400: 'Error en las credenciales. Por favor, inténtelo de nuevo más tarde.',
  401: 'Error durante la autenticación. Por favor, inténtelo de nuevo más tarde.',
  404: 'Error de conexión. Por favor, verifique su conexión a internet y recargue la página.'
};

export default errorDictionary;
