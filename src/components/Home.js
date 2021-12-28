import React, { useContext } from 'react';
import Users from './Users';
import { UserContext } from '../context_store/UserProvider';
import styles from './Home.module.css';

const Home = () => {
  const { users } = useContext(UserContext);
  const hasUsersToDisplay = users && users.length > 0;
  return (
    <div
      data-testid='home-page'
      className={`routePage ${styles.homeContainer}`}>
      {hasUsersToDisplay ? <Users /> : 'No users to display'}
    </div>
  );
};

export default Home;
