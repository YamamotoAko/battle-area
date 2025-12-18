'use client';

import styles from './Logo.module.css';
import React from 'react';

type Props = {
  color?: string;
  fontSize?: string;
};
export default function Logo({ color = '#333', fontSize = '24px' }: Props) {
  return (
    <h1>
      <a
        href="#"
        className={styles.logo}
        style={{ color: color, fontSize: fontSize }}
      >
        BATTLE AREA
      </a>
    </h1>
  );
}
