import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Online Store</p>
        <ul className={styles.footerLinks}>
          <li><a href="#">main</a></li>
          <li><a href="#">about us</a></li>
          <li><a href="#">contact us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
