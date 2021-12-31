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
            <div data-testid='userprofile-name'>Name: {user.name}</div>
            <div data-testid='userprofile-company'>
              Company: {user.company.name}
            </div>
            <div data-testid='userprofile-city'>
              Location: {user.address.city}
            </div>
            <div className={styles.userProfileContact}>
              <div data-testid='userprofile-email'>Email{user.email}</div>
              <div data-testid='userprofile-phone'>Phone{user.phone}</div>
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
