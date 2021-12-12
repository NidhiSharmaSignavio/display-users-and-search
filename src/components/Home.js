import React, { useContext, useEffect } from 'react';
import Users from './Users';
import { UserContext } from '../context_store/UserProvider';

const Home = () => {
  const context = useContext(UserContext);
  useEffect(() => {
    context.loadUsers();
    //eslint-disable-next-line
  }, []);
  return (
    <div data-testid='home-page'>
      <Users />
    </div>
  );
};

export default Home;
