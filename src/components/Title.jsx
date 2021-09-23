import React from 'react';

import styles from '../styles/components/Title.module.css';

export const Title = ({ name }) => {
  return (
    <>
      <h1 className={styles.h1}>{name}</h1>
    </>
  )
}
