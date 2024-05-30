import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    content: string,

}

function Button({ content }: ButtonProps) {
    return (
        <button className={`w-full h-12 bg-black rounded-2xl my-1 text-white ${styles.button}`}>
            {content}
        </button>
    )
}

export default Button