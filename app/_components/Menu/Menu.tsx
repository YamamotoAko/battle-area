'use client';
import Link from 'next/link';
import styles from './Menu.module.css';
import React, { useState } from 'react';
import cx from 'classnames';

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.items}>
        <li>
          <Link href="/home">ホーム</Link>
        </li>
        <li>
          <Link href="/activity">アクティビティ</Link>
        </li>
        <li>
          <Link href="/news">ニュース</Link>
        </li>
      </ul>
    </nav>
  );
}
