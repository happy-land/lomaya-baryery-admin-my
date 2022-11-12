import { FC, useEffect } from 'react';
import { useDispatch } from '../../hooks/hooks';
import { Header } from '../header/header';
import { getShiftsThunk } from '../../redux-store/actions/shift';
import styles from './layout.module.css';

export const Layout: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShiftsThunk());
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <main className={styles.main}>
        <div>Navbar</div>
        <div>Outlet</div>
      </main>
    </div>
  );
};
