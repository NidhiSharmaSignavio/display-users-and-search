import { render, screen } from '@testing-library/react';
import App from '../App';
import * as apiCalls from '../apiCalls';

test('renders homepage', () => {
  render(<App />);
  expect(screen.queryByTestId('home-page')).toBeTruthy();
});
