import { GET_USERS, SET_SEARCH_STRING } from './types';

const userReducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_SEARCH_STRING:
      return {
        ...state,
        findString: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
