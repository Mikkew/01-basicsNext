import React from 'react';
import Link from 'next/link';

import styles from '../styles/components/NavBar.module.css'

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.a}>Home</a>
      </Link>
      <Link href="/users">
        <a className={styles.a}>Users</a>
      </Link>
      <Link href="/posts">
        <a className={styles.a}>Posts</a>
      </Link>
      {/* <Link href={`/posts/${5}`}>
        <a>Posts ID: 5</a>
      </Link> */}
    </nav>
  )
};
