import { FC, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './navbar-element.module.css';

interface NavbarProps {
  title: string;
  link: string;
  section: string;
}

export const NavbarElement: FC<NavbarProps> = ({ title, link, section, children }) => {
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();

  // return <li>{title}</li>;
  return (
    <li className={styles.item__container}>
      <NavLink
        className={`${styles.item__box} ${location.pathname === link ? styles.item__box_active : null}`}
        onClick={() => setIsActive((active) => !active)}
        to={link}
      >
        <p className={styles.item__title}>{title}</p>
      </NavLink>
    </li>
  );
};
