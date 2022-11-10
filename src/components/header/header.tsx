import { EnterIcon } from '../../ui/icons/enter-icon';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>Лого</div>
      <div className={styles.links}>
        <button type='button' className={`${styles.button} text_type_main-medium`}>
          Аккаунт
        </button>
        <button type='button' className={`${styles.button} text_type_main-medium`}>
          <EnterIcon type='link'/>
          Выйти
        </button>
      </div>
    </header>
  );
};
