import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Pagination from './index';

describe('Pagination component', () => {
  it('Render component', () => {
    render(<Pagination size={10} page={1} changePage={number => number} />);
  });
  it('Back page', () => {
    let page;
    const { getByTestId } = render(
      <Pagination size={10} page={4} changePage={number => setPage(number)} />,
    );

    const setPage = number => {
      page = number;
    };

    const accordionItem = getByTestId('back');
    fireEvent.click(accordionItem);

    expect(page).toEqual(3);
  });
  it('Next page', () => {
    let page;
    const { getByTestId } = render(
      <Pagination size={10} page={4} changePage={number => setPage(number)} />,
    );

    const setPage = number => {
      page = number;
    };

    const accordionItem = getByTestId('next');
    fireEvent.click(accordionItem);

    expect(page).toEqual(5);
  });
});
