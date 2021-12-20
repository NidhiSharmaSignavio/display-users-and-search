import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import * as apiCalls from '../apiCalls';
import App from '../App';

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
});

test('should display users profile page when user clicks on a particular user on home page', async () => {
  const mockGetUsers = jest.spyOn(apiCalls, 'getUsers');
  mockGetUsers.mockResolvedValueOnce(users);
  render(<App />);

  const userCards = await screen.findAllByTestId('link-card');
  fireEvent.click(userCards[0]);

  await waitFor(() => {
    expect(screen.queryByTestId('user-profile-page')).toBeVisible();
    expect(screen.queryByTestId('user-lg-image')).toBeVisible();
  });
});
