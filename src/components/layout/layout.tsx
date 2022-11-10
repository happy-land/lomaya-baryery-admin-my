import { Header } from '../header/header';
import styles from './layout.module.css';

export const Layout = () => (
  <div>
    <div>
      <Header />
    </div>
    <main className={styles.main}>Navbar, Outlet</main>
  </div>
);
