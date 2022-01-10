import { render } from '@testing-library/react';

import TextWithSkeleton from './TextWithSkeleton';

const sampleText: string = 'Hello World!';

const setup = (textProp: string, loading: boolean) => {
  const component = render(
    <TextWithSkeleton
      text={textProp}
      loading={loading}
    />
  );
  const skeleton = component.queryByTestId('skeleton');
  const text = component.queryByText(textProp);

  return {
    skeleton,
    text
  };
};

describe('Conditional rendering of content', () => {
  test('Render the skeleton when the text is not ready', () => {
    const { skeleton, text } = setup(sampleText, true);

    expect(skeleton).not.toBeNull();
    expect(text).not.toBeNull();
  });

  test('Render the text when ready', () => {
    const { skeleton, text } = setup(sampleText, false);

    expect(skeleton).toBeNull();
    expect(text).not.toBeNull();
    expect(text).toHaveTextContent(sampleText);
  });
});
