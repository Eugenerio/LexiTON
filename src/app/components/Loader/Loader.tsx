import React from 'react'
import styles from './Loader.module.css'

function Loader() {
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover flex items-center justify-center ${styles.background} ${styles.appear}`}>
            <h1 className={`text-5xl font-bold ${styles.appear}`}>LexiTON</h1>
        </div>
    )
}

export default Loader