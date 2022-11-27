import { FC } from 'react';
import styles from './button.module.css';

interface IButtonProps {
  // onClick: () => void;
  handleClick: () => void;
  variant: string;
  size?: string;
  type: string;
}

export const Button: FC<IButtonProps> = ({
  // onClick,
  handleClick,
  variant = '',
  size = 'large',
  type = 'primary',
  children,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[type]}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
