import Head from "next/head";
import { NavBar } from "./NavBar";

import styles from '../styles/components/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.div}>
      <Head>
        <title>Mis bases</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
