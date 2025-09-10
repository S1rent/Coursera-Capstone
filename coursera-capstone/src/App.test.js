import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app correctly', () => {
  render(<App />);
  expect("Little Lemon").toBeInTheDocument();
  expect("This weeks specials!").toBeInTheDocument();
});
