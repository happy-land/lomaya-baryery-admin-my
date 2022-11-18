import { FC, useState } from 'react';
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
          <p>{text}</p>
        </div>
      </button>
      {isActive ? children : null}
    </div>
  );
};
