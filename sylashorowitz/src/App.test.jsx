import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders primary navigation links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /bio/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /engineering/i })).toBeInTheDocument();
});
