import { render, screen, waitFor } from '@testing-library/react';
import * as apiCalls from '../apiCalls';
import UserProfile from '../components/UserProfile';
import { users } from './users';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context_store/UserProvider';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const mockAPICall = () => {
  const mockGetUsers = jest.spyOn(apiCalls, 'getUsers');
  mockGetUsers.mockResolvedValueOnce(users);
};

beforeEach(() => {
  mockAPICall();
  useParams.mockReturnValue({ id: '1' });
  render(
    <UserContext.Provider value={{ users }}>
      <UserProfile />
    </UserContext.Provider>
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('should display users profile page with user image when user clicks on a particular user on home page', async () => {
  await waitFor(() => {
    expect(screen.queryByTestId('user-profile-page')).toBeVisible();
  });
});

test('should display user image on user profile page', async () => {
  const picture = await screen.findByTestId('user-lg-image');

  await waitFor(() => {
    expect(picture).toBeVisible();
  });
});

test('should display user name', async () => {
  const name = await screen.findByTestId('userprofile-name');

  await waitFor(() => {
    expect(name).toBeVisible();
  });
});

test('should display user company', async () => {
  const company = await screen.findByTestId('userprofile-company');

  await waitFor(() => {
    expect(company).toBeVisible();
  });
});

test('should display user city', async () => {
  const city = await screen.findByTestId('userprofile-city');

  await waitFor(() => {
    expect(city).toBeVisible();
  });
});

test('should display user email', async () => {
  const email = await screen.findByTestId('userprofile-email');

  await waitFor(() => {
    expect(email).toBeVisible();
  });
});
