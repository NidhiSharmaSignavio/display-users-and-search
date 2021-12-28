import { render, waitFor, screen } from '@testing-library/react';
import App from '../App';
import * as apiCalls from '../apiCalls';
import userEvent from '@testing-library/user-event';
import { users } from './users';

beforeEach(() => {
  const mockGetUsers = jest.spyOn(apiCalls, 'getUsers');
  mockGetUsers.mockResolvedValue(users);

  render(<App />);
});

afterEach(() => {
  jest.resetAllMocks();
});

test('should display input box that allows user to enter search string', () => {
  const inputBox = screen.queryByTestId('search-text');

  expect(inputBox).toBeVisible();
});

test('should display all users when search string is empty', () => {
  const searchString = '';
  const inputBox = screen.queryByTestId('search-text');

  userEvent.type(inputBox, searchString);

  const userCards = screen.queryAllByTestId('user-card');
  console.log(userCards.length);

  expect(userCards.length).toBe(users.length);
});

test('should display all users when search string is space only', () => {
  const searchString = ' ';
  const inputBox = screen.queryByTestId('search-text');

  userEvent.type(inputBox, searchString);

  const userCards = screen.queryAllByTestId('user-card');

  expect(userCards.length).toBe(users.length);
});

test('should display one user when user enters "le" in search bar', () => {
  const searchString = 'le';
  const inputBox = screen.queryByTestId('search-text');

  userEvent.type(inputBox, searchString);

  const userCards = screen.queryAllByTestId('user-card');

  expect(userCards.length).toBe(1);
});

test('should display two users when user enters "ro" in the search bar', () => {
  const searchString = 'ro';
  const inputBox = screen.queryByTestId('search-text');

  userEvent.type(inputBox, searchString);

  const userCards = screen.queryAllByTestId('user-card');

  expect(userCards.length).toBe(2);
});
