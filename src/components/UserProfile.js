import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context_store/UserProvider';
import styles from './UserProfile.module.css';
import image from './placeholder.png';

const UserProfile = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const [myUsers, setMyUsers] = useState([]);

  useEffect(() => {
    if (users && users.length > 0) setMyUsers(users);
  }, [users]);

  const hasUsers = myUsers && myUsers.length > 0;
  const matchedUser = myUsers.filter(user => user.id === parseInt(id))[0];
  const user = hasUsers && matchedUser;

  return (
    <div
      data-testid='user-profile-page'
      className={`routePage ${styles.userProfilePage}`}>
      {user ? (
        <div className={styles.userProfileContainer}>
          <div data-testid='user-lg-image'>
            <img alt='Name of user' src={image} className={styles.image} />
          </div>
          <div className={styles.userProfileDetails}>
            <div data-testid='userprofile-name' className={styles.row}>
              <label>{user.name}</label>
            </div>
            <div data-testid='userprofile-company' className={styles.row}>
              <label>{user.company.name}</label>
            </div>
            <div data-testid='userprofile-city' className={styles.row}>
              <label>{user.address.city}</label>
            </div>
          </div>
          <div className={styles.userProfileContact}>
            <div data-testid='userprofile-email' className={styles.row}>
              <label>{user.email}</label>
            </div>
            <div data-testid='userprofile-phone' className={styles.row}>
              <label>{user.phone}</label>
            </div>
            <div data-testid='userprofile-website' className={styles.row}>
              <label>{user.website}</label>
            </div>
          </div>
        </div>
      ) : (
        'No user information available'
      )}
    </div>
  );
};

export default UserProfile;
