import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme/theme';
import ImageWithSkeleton from './ImageWithSkeleton';

describe('Conditional renderings of content', () => {
  const testImageUrl = 'https://picsum.photos/seed/picsum/200/300';

  const setup = (url: string | undefined) => {
    const component = render(
      <ThemeProvider theme={theme}>
        <ImageWithSkeleton
          url={url}
          alt="test-image"
        />
      </ThemeProvider>
    );

    const skeleton = component.queryByTestId('skeleton');
    const image = component.queryByAltText('test-image');
    const fallbackIcon = component.queryAllByTestId('fallback-icon');

    return {
      component,
      skeleton,
      image,
      fallbackIcon
    };
  };

  test('Render the skeleton when the image has not finished loading yet', async () => {
    const { component, skeleton, image } = setup(testImageUrl);

    expect(skeleton).not.toBeNull();
    expect(image).not.toBeNull();
    expect(image).toHaveAttribute('src', testImageUrl);

    fireEvent.load(image!);

    const updatedSkeleton = component.queryByTestId('skeleton');
    expect(updatedSkeleton).toBeNull();
  });

  test('It only renders the disk icon as it does not have a url available', () => {
    const { skeleton, image, fallbackIcon } = setup(undefined);

    expect(skeleton).toBeNull();
    expect(image).toBeNull();
    expect(fallbackIcon).not.toBeNull();
  });

  test('Render only skeleton when url is "pending"', () => {
    const { skeleton, image } = setup('pending');

    expect(skeleton).not.toBeNull();
    expect(image).toBeNull();
  });
});
