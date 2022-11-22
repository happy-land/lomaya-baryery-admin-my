import { FC, useState } from 'react';
import { CalendarIcon, ChevronDownIcon } from '../../ui/icons';
import styles from './dropdown.module.css';

interface IDropdownProps {
  text: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
}

export const Dropdown: FC<IDropdownProps> = ({ text, icon, activeIcon, children }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <button type='button' className={styles.button} onClick={() => setIsActive((active) => !active)}>
        <div className={styles.button__container}>
          {isActive ? activeIcon : icon}
          <p className={`${styles.button__text} ${isActive ? styles.button__text_active : null}`}>{text}</p>
          {isActive ? <ChevronDownIcon type='link-active' /> : null }
          
        </div>
      </button>
      {isActive ? children : null}
    </div>
  );
};
