import { render, screen } from '@testing-library/react';
import App from '../App';
import * as apiCalls from '../apiCalls';

test('renders homepage', () => {
  render(<App />);
  expect(screen.queryByTestId('home-page')).toBeTruthy();
});

test('displays no users to display when there are no users to display', () => {
  const mockGetUsers = jest.spyOn(apiCalls, 'getUsers');
  mockGetUsers.mockResolvedValueOnce([]);
  render(<App />);
  expect(screen.queryByText('No users to display')).toBeVisible();
});
