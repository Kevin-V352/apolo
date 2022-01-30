import { fireEvent, render, RenderResult } from '@testing-library/react';

import Pager from './Pager';

describe('Hide action buttons', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Pager
        currentPage={1}
        nextPage={false}
        onNext={() => { }}
        onPrev={() => { }}
        numberOfResults={20}
      />
    );
  });

  test('Component does not render back button backs up when on first page', () => {
    const prevButton = component.queryByTestId('prevButton');

    expect(prevButton).toBeNull();
  });

  test('The component does not render the forward button when there are no more results', () => {
    const nextButton = component.queryByTestId('nextButton');

    expect(nextButton).toBeNull();
  });
});

describe('Redirect to next page', () => {
  const onNextFn = jest.fn();
  const onPrevFn = jest.fn();

  const setup = (currentPage: number) => {
    const component = render(
      <Pager
        currentPage={currentPage}
        nextPage
        onNext={onNextFn}
        onPrev={onPrevFn}
        numberOfResults={20}
      />
    );

    return component;
  };

  test('Go to next page', () => {
    const component = setup(1);

    const nextButton = component.getByTestId('nextButton');

    fireEvent.click(nextButton);

    expect(onNextFn).toBeCalledTimes(1);
  });

  test('Go to previous page', () => {
    const component = setup(2);

    const prevButton = component.getByTestId('prevButton');

    fireEvent.click(prevButton);

    expect(onPrevFn).toBeCalledTimes(1);
  });
});
