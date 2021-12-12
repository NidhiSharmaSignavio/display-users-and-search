import React, { useContext } from 'react';
import { UserContext } from '../context_store/UserProvider';

const Users = () => {
  const { users } = useContext(UserContext);
  return users && users.length > 0 ? (
    <div>
      {users.map(user => (
        <div key={user.id} data-testid='user-card'>
          <div data-testid='user-name'>{user.name}</div>
          <div data-testid='user-city'>{user.address.city}</div>
          <div data-testid='user-company'>{user.company.name}</div>
        </div>
      ))}
    </div>
  ) : (
    'No users to display'
  );
};

export default Users;
