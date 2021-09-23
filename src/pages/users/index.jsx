import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import { Title } from '../../components/Title';

import styles from "../../styles/pages/users/index.module.css";

const Users = ({users}) => {

  const router= useRouter();

  return (
    <>
      <Title name="Users Page" />
      <div className={styles.grid}>
        { users.map( (key, index) => (
            <div key={index} className={styles.card}>
              <Link
                href={{
                  pathname: "/users/[user]",
                  query: { user: key.id },
                }}
              >
                <a>
                  <h3 className={styles.h3}> {key.name} </h3>
                </a>
              </Link>
              <p className={styles.p}>{key.username}</p>
              <p className={styles.p}>{key.email}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export const getStaticProps = async() => {
  
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: { users }, // will be passed to the page component as props
  }
}

export default Users;
