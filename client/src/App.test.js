import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders site name', () => {
  const { getByText } = render(<App />);
  const el = getByText(/Roll Out/i);
  expect(el).toBeInTheDocument();
});
