'use client';
import Link from 'next/link';
import styles from './Menu.module.css';
import React, { useState } from 'react';
import cx from 'classnames';
import Image from 'next/image';

export default function Menu() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <nav className={cx(styles.nav, isOpen && styles.open)}>
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

      <button className={cx(styles.button, styles.close)} onClick={close}>
        {/* <Image src="/close.svg" alt="閉じる" width={24} height={24} priority /> */}
      </button>
    </nav>
  );
}
