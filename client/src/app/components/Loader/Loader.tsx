import React from 'react';
import styles from './Loader.module.css';

function Loader() {
  return (
    <div
      className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat ${styles.background} ${styles.appear}`}
    >
      <h1 className={`text-5xl font-bold ${styles.appear}`}>LexiTON</h1>
    </div>
  );
}

export default Loader;
