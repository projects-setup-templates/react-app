import { render, screen } from '@testing-library/react';
import React from 'react';

import { Home } from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
