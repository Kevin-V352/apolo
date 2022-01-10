import { render } from '@testing-library/react';

import SlidingContainer from './SlidingContainer';

const sampleText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

const setup = (prop: string | null) => {
  const component = render(<SlidingContainer text={prop} />);
  const skeleton = component.queryByTestId('skeleton');
  const text = component.queryByText(sampleText);

  return {
    skeleton,
    text
  };
};

describe('Conditional rendering of content', () => {
  test('Does not render any content when receiving "null"', () => {
    const { skeleton, text } = setup(null);

    expect(skeleton).toBeNull();
    expect(text).toBeNull();
  });

  test('Render the skeleton when the text is not ready', () => {
    const { skeleton, text } = setup('pending');

    expect(skeleton).not.toBeNull();
    expect(text).toBeNull();
  });

  test('Render content when text is ready', () => {
    const { skeleton, text } = setup(sampleText);

    expect(skeleton).toBeNull();
    expect(text).not.toBeNull();
  });
});
