import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Accordion from './index';

describe('Accordion component', () => {
  it('Render component', () => {
    render(
      <Accordion title="test">
        <h1>test</h1>
      </Accordion>,
    );
  });
  it('Show children', () => {
    const { getByTestId } = render(
      <Accordion title="test">
        <h1>test</h1>
      </Accordion>,
    );

    const accordionItem = getByTestId('accordionItem');

    fireEvent.click(accordionItem);
  });
});
