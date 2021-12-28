import { render, screen, waitFor, cleanup } from '@testing-library/react';
import * as apiCalls from '../apiCalls';
import UserProfile from '../components/UserProfile';

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
];

afterEach(() => {
  jest.resetAllMocks();
  cleanup();
});

const renderUserProfileAndMockAxios = () => {
  const mockGetUsers = jest.spyOn(apiCalls, 'getUsers');
  mockGetUsers.mockResolvedValueOnce(users);
  render(<UserProfile />);
};

test('should display users profile page with user image when user clicks on a particular user on home page', async () => {
  renderUserProfileAndMockAxios();

  await waitFor(() => {
    expect(screen.queryByTestId('user-profile-page')).toBeVisible();
  });
});

test('should display user image on user profile page', async () => {
  renderUserProfileAndMockAxios();

  await waitFor(() => {
    expect(screen.queryByTestId('user-lg-image')).toBeVisible();
  });
});
