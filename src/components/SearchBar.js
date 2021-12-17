import React, { useContext } from 'react';
import { UserContext } from '../context_store/UserProvider';

const SearchBar = () => {
  const { setSearchString, findString } = useContext(UserContext);

  const handleSearchTextChange = e => {
    setSearchString(e.target.value);
  };

  return (
    <div>
      <input
        data-testid='search-text'
        type='text'
        value={findString}
        onChange={handleSearchTextChange}
      />
    </div>
  );
};

export default SearchBar;
