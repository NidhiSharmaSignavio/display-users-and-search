import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context_store/UserProvider';
import styles from './Users.module.css';
import image from './placeholder.png';
import useFilteredUsers from './useFilteredUsers';

const Users = () => {
  const { findString } = useContext(UserContext);
  const users = useFilteredUsers(findString);
  const hasUsersToDisplay = users && users.length > 0;

  const renderUsers =
    hasUsersToDisplay &&
    users.map(user => (
      <li key={user.id} data-testid='user-card' className={styles.userCard}>
        <Link
          to={`/users/${user.id}`}
          data-testid='link-card'
          className={styles.linkCard}>
          <div data-testid='user-sm-img' className={styles.userImage}>
            <img className={styles.image} alt={user.name} src={image}></img>
          </div>
          <div className={styles.userDetails}>
            <div data-testid='user-name' className={styles.userName}>
              {user.name}
            </div>
            <div data-testid='user-username' className={styles.userUserName}>
              {user.username}
            </div>
            <div data-testid='user-company' className={styles.userCompany}>
              {user.company.name}
            </div>
            <div data-testid='user-city' className={styles.userCity}>
              {user.address.city}
            </div>
          </div>
        </Link>
      </li>
    ));

  return (
    hasUsersToDisplay && (
      <ul className={styles.usersContainer}>{renderUsers}</ul>
    )
  );
};

export default Users;
