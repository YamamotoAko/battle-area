import styles from './Logo.module.css';
import React from 'react';

export default function Logo() {
  return (
    <h1>
      <a href="#" className={styles.logo}>
        BATTLE AREA
      </a>
    </h1>
  );
}
