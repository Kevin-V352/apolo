import { render } from '@testing-library/react';

import Banner from './Banner';

test('The content is rendered', () => {
  const component = render(<Banner />);

  component.getByText('APOLO');
  component.getByText('Busca los detalles de tus canciones favoritas');
  component.getByText('Powered by');
  component.getByText('KEVIN VEGA');
});
