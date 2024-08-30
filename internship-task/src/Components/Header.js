// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>CodeAlpha</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/">Home</Link></li>
          <li className={styles.navItem}><Link to="/task1">Gallery</Link></li>
          <li className={styles.navItem}><Link to="/task2">Calculator</Link></li>
          <li className={styles.navItem}><Link to="/task3">Portfolio</Link></li>
          <li className={styles.navItem}><Link to="/task4">Music</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
