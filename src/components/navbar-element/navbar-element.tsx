import { FC } from 'react';
import styles from './navbar-element.module.css';

interface NavbarProps {
  title: string;
}

export const NavbarElement: FC<NavbarProps> = ({ title, children }) => {
  // return <li>{title}</li>;
  return (
    <li className={styles.item__container}>
      <div className={styles.item__box}>
        <p className={styles.item__title}>{title}</p>
      </div>
    </li>
  );
};
