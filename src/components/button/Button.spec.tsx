import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './index';

describe('Button component', () => {
  it('Render component', () => {
    render(<Button>Test</Button>);
  });
  it('Render loading', () => {
    const { getByText } = render(<Button loading>Test</Button>);

    const accordionItem = getByText('Carregando...');

    fireEvent.click(accordionItem);
  });
});
