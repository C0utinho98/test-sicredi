import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './index';

describe('NotFound component', () => {
  it('Render component', () => {
    render(
      <Router>
        <NotFound />
      </Router>,
    );
  });
});
