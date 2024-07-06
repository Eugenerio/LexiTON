import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

function Button({ content, icon, className, iconPosition, ...props }: ButtonProps) {
  return (
    <button
      className={`my-1 h-12 w-full rounded-2xl bg-black text-white ${styles.button} select-none ${className}`}
      {...props}
    >
      {iconPosition === 'left' && icon}
      {content}
      {iconPosition === 'right' && icon}
    </button>
  );
}

export default Button;
