import React, { createContext } from 'react';
import userReducer from './userReducer';
import { useReducer } from 'react';
import { getUsers } from '../apiCalls';
import { GET_USERS, SET_SEARCH_STRING } from './types';

const initialState = {
  users: [],
  user: {},
  findString: '',
};

export const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const loadUsers = async () => {
    const users = await getUsers();
    dispatch({
      type: GET_USERS,
      payload: users,
    });
  };

  const setSearchString = searchText => {
    dispatch({
      type: SET_SEARCH_STRING,
      payload: searchText,
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        user: state.user,
        findString: state.findString,
        loadUsers,
        setSearchString,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
