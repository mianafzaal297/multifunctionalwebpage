// Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Follow us on: <></>
        <a href="https://www.linkedin.com/in/mianafzaal297/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://github.com/mianafzaal297" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://www.instagram.com/mianafzaal297/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;
