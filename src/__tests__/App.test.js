import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders homepage', () => {
  render(<App />);
  expect(screen.queryByTestId('home-page')).toBeTruthy();
});

test('renders navbar', () => {
  render(<App />);
  expect(screen.queryByTestId('navbar')).toBeTruthy();
});
