import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}

function Button({ content, ...props }: ButtonProps) {
  return (
    <button className={`my-1 h-12 w-full rounded-2xl bg-black text-white ${styles.button}`} {...props}>
      {content}
    </button>
  );
}

export default Button;
