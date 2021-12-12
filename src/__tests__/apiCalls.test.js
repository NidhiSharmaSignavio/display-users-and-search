import { getUsers } from '../apiCalls';
import axios from 'axios';

jest.mock('axios');

const res = {
  data: [
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
  ],
};
test('should return null if there is network error', async () => {
  axios.get.mockImplementationOnce(() => Promise.reject('Network error'));
  const data = await getUsers();
  expect(data).toBe(null);
});

test('should return list of users when axios request is successful', async () => {
  axios.get.mockResolvedValueOnce(res);
  const data = await getUsers();
  expect(data.length).toBe(res.data.length);
});
