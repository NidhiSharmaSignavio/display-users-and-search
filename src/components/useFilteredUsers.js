import { useContext, useMemo } from 'react';
import { UserContext } from '../context_store/UserProvider';

const useFilteredUsers = searchText => {
  const { users } = useContext(UserContext);
  return useMemo(() => {
    const findThis = searchText.trim();
    if (findThis === '') return users;
    const regex = new RegExp('^' + searchText, 'i');

    return users.filter(
      user =>
        user.name.match(regex) ||
        user.address.city.match(regex) ||
        user.company.name.match(regex) ||
        user.username.match(regex)
    );
  }, [searchText, users]);
};

export default useFilteredUsers;
