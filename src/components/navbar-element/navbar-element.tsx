import { FC } from 'react';
import styles from './navbar-element.module.css';

interface NavbarProps {
  title: string;
}

export const NavbarElement: FC<NavbarProps> = ({ title, children }) => {
  return <li>{title}</li>;
};
