import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={`h-16 w-full ${styles.background} p-4`}>
            <div className='flex h-full w-full items-center justify-between'>
                <div className='w-16 h-6 bg-red-800'></div>
                <div className="w-8 h-full bg-red-800"></div>
            </div>
        </div>
    )
}

export default Header