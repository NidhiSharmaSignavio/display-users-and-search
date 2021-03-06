import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import SearchBar from './SearchBar';

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const brandName = (
    <Link to='/' className={styles.backLink}>
      Signavio
    </Link>
  );
  const linkToHome = (
    <Link to='/' className={styles.backLink}>
      <i className={`fas fa-arrow-left ${styles.backLink}`} color='white'></i>
    </Link>
  );
  return (
    <div data-testid='navbar' className={styles.navbar}>
      <div data-testid='brand-name' className={styles.brandContainer}>
        {pathname === '/' ? brandName : linkToHome}
      </div>
      <div
        data-testid='search-bar-container'
        className={styles.searchContainer}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
