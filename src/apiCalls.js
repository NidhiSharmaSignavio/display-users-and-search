import axios from 'axios';

export const getUsers = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
