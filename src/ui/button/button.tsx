import { FC } from 'react';
import styles from './button.module.css';

interface IButtonProps {
  onClick: () => void;
  variant: string;
  size?: string;
  type: string;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  variant = '',
  size = 'large',
  type = 'primary',
  children,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
