import React, { useContext } from 'react';
import { UserContext } from '../context_store/UserProvider';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const { setSearchString, findString } = useContext(UserContext);

  const handleSearchTextChange = e => {
    setSearchString(e.target.value);
  };

  return (
    <div className={styles.searchIconBarContainer}>
      <i className={`fa fa-search ${styles.searchIcon}`} aria-hidden='true' />
      <input
        className={styles.searchInput}
        data-testid='search-text'
        type='text'
        placeholder='Search Users'
        value={findString}
        onChange={handleSearchTextChange}
      />
    </div>
  );
};

export default SearchBar;
