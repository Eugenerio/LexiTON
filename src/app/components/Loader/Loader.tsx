import React from 'react';
import styles from './Loader.module.css';
import Image from 'next/image'
import logo from '@/app/images/logo.png'

function Loader() {
  return (
    <div
      className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat ${styles.background} ${styles.appear}`}
    >
      <Image src={logo} width={245} height={103} className={` ${styles.appear}`} alt='LexiTON logo' priority={true} />
    </div>
  );
}

export default Loader;
