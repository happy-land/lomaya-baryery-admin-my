import { FC, useEffect } from 'react';
import { useDispatch } from '../../hooks/hooks';
import { Header } from '../header/header';
import { getShiftsThunk } from '../../redux-store/actions/shift';
import styles from './layout.module.css';
import { Button } from '../../ui/button/button';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar/navbar';

export const Layout: FC = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log('btn clicked');
  }

  // useEffect(() => {
  //   dispatch(getShiftsThunk());
  // }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <main className={styles.main}>
        <Navbar />
        <Outlet />
        {/* <Button onClick={onClick}>dsf</Button> */}
      </main>
    </div>
  );
};
