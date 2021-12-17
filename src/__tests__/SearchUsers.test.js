import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import * as apiCalls from '../apiCalls';
import userEvent from '@testing-library/user-event';

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
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
];

describe('Search Users Feature', () => {
  beforeEach(() => {
    const mockGetUsers = jest.spyOn(apiCalls, 'getUsers');
    mockGetUsers.mockResolvedValue(users);
    render(<App />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should display input box that allows user to enter search string', async () => {
    const inputBox = await screen.findByTestId('search-text');
    await waitFor(() => {
      expect(inputBox).toBeVisible();
    });
  });

  test('should display all users when search string is empty', async () => {
    const searchString = '';
    const inputBox = await screen.findByTestId('search-text');

    userEvent.type(inputBox, searchString);
    const userCards = await screen.findAllByTestId('user-card');

    await waitFor(() => {
      expect(userCards.length).toBe(3);
    });
  });

  test('should display all users when search string is space only', async () => {
    const searchString = ' ';
    const inputBox = await screen.findByTestId('search-text');

    userEvent.type(inputBox, searchString);
    const userCards = await screen.findAllByTestId('user-card');

    await waitFor(() => {
      expect(userCards.length).toBe(3);
    });
  });

  test('should display one customer when user enters Le/le in search bar', async () => {
    const searchString = 'le';
    const inputBox = await screen.findByTestId('search-text');

    userEvent.type(inputBox, searchString);
    const userCards = await screen.findAllByTestId('user-card');

    await waitFor(() => {
      expect(userCards.length).toBe(1);
    });
  });

  test('should display two customers when user enters "ro" in the search bar', async () => {
    const searchString = 'ro';
    const inputBox = await screen.findByTestId('search-text');

    userEvent.type(inputBox, searchString);
    const userCards = await screen.findAllByTestId('user-card');

    await waitFor(() => {
      expect(userCards.length).toBe(2);
    });
  });
});
