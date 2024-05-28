import React from 'react'
import styles from './Loader.module.css'

function Loader() {
    return (
        <div className={styles.background}>
            <h1 className={`text-5xl font-bold ${styles.appear}`}>LexiTON</h1>
        </div>
    )
}

export default Loader