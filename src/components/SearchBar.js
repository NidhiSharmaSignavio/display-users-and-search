import React, { useContext } from 'react';
import { UserContext } from '../context_store/UserProvider';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const { setSearchString, findString } = useContext(UserContext);

  const handleSearchTextChange = e => {
    setSearchString(e.target.value);
  };

  return (
    <div>
      <input
        className={styles.searchInput}
        data-testid='search-text'
        type='text'
        placeholder='Search by name, username, city and company name'
        value={findString}
        onChange={handleSearchTextChange}
      />
    </div>
  );
};

export default SearchBar;
