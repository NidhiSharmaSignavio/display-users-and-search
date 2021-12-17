import React, { useContext, useEffect } from 'react';
import Users from './Users';
import { UserContext } from '../context_store/UserProvider';
import styles from './Home.module.css';

const Home = () => {
  const context = useContext(UserContext);
  useEffect(() => {
    context.loadUsers();
    //eslint-disable-next-line
  }, []);
  const hasUsersToDisplay = context.users && context.users.length > 0;
  return (
    <div data-testid='home-page' className={styles.homeContainer}>
      {hasUsersToDisplay ? <Users /> : 'No users to display'}
    </div>
  );
};

export default Home;
