import { UserIcon } from '../../ui/icons';
import { EnterIcon } from '../../ui/icons/enter-icon';
import { Logo } from '../../ui/logo/logo';
import '../../assets/styles/common.css';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
        <p className={`${styles.logo__title} text_type_main-large`}>ломая барьеры</p>
      </div>
      <div className={styles.links}>
        <button type='button' className={`${styles.button} text_type_main-medium`}>
          <UserIcon type='link' />
          Аккаунт
        </button>
        <button type='button' className={`${styles.button} text_type_main-medium`}>
          <EnterIcon type='link' />
          Выйти
        </button>
      </div>
    </header>
  );
};
