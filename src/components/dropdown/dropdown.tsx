import { FC, useState } from 'react';
import { CalendarIcon, ChevronDownIcon } from '../../ui/icons';
import styles from './dropdown.module.css';

interface IDropdownProps {
  text: string;
}

export const Dropdown: FC<IDropdownProps> = ({ text, children }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <button type='button' className={styles.button} onClick={() => setIsActive((active) => !active)}>
        <div className={styles.button__container}>
          <CalendarIcon type='link' />
          <p className={styles.button__text}>{text}</p>
          <ChevronDownIcon type='link' />
        </div>
      </button>
      {isActive ? children : null}
    </div>
  );
};
