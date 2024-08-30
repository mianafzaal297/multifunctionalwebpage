// Home.js
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.welcomeMessage}>Welcome to CodeAlpha</h1>
      <p className={styles.introduction}>Explore our projects and enjoy the journey through our work!</p>
    </div>
  );
};

export default Home;
