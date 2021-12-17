import { render, screen, waitFor } from '@testing-library/react';
import * as apiCalls from '../apiCalls';
import Home from '../components/Home';
import UserProvider from '../context_store/UserProvider';

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

const renderHomeWithGetUsersReturnValue = value => {
  const mockGetUsers = jest.spyOn(apiCalls, 'getUsers');
  mockGetUsers.mockResolvedValueOnce(value);
  render(
    <UserProvider>
      <Home />
    </UserProvider>
  );
};

afterEach(() => {
  jest.resetAllMocks();
});

test('should display no users to display is users is []', async () => {
  renderHomeWithGetUsersReturnValue([]);
  const textElement = await screen.findByText('No users to display');
  await waitFor(() => {
    expect(textElement).toBeVisible();
  });
});

test('should display no users to display there is network error', async () => {
  renderHomeWithGetUsersReturnValue(null);
  const textElement = await screen.findByText('No users to display');
  await waitFor(() => {
    expect(textElement).toBeVisible();
  });
});

test('should display list of users if no users to display', async () => {
  renderHomeWithGetUsersReturnValue(users);
  const userCards = await screen.findAllByTestId('user-card');
  await waitFor(() => {
    expect(userCards.length).toBe(users.length);
  });
});

test('should display names of all users', async () => {
  renderHomeWithGetUsersReturnValue(users);
  const userNames = await screen.findAllByTestId('user-name');
  await waitFor(() => {
    expect(userNames.length).toBe(users.length);
    expect(userNames[0].textContent).toBe(users[0].name);
  });
});

test('should display city of all users', async () => {
  renderHomeWithGetUsersReturnValue(users);
  const userCities = await screen.findAllByTestId('user-city');
  await waitFor(() => {
    expect(userCities.length).toBe(users.length);
    expect(userCities[0].textContent).toBe(users[0].address.city);
  });
});

test('should display company name of all users', async () => {
  renderHomeWithGetUsersReturnValue(users);
  const userCompanies = await screen.findAllByTestId('user-company');
  await waitFor(() => {
    expect(userCompanies.length).toBe(users.length);
    expect(userCompanies[0].textContent).toBe(users[0].company.name);
  });
});

test('should display image of all users', async () => {
  renderHomeWithGetUsersReturnValue(users);
  const userImg = await screen.findAllByTestId('user-sm-img');
  await waitFor(() => {
    expect(userImg.length).toBe(users.length);
  });
});
