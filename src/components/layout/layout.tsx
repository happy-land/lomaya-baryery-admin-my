import { FC, useEffect } from 'react';
import { useDispatch } from '../../hooks/hooks';
import { Header } from '../header/header';
import { getShiftsThunk } from '../../redux-store/actions/shift';
import styles from './layout.module.css';
import { Button } from '../../ui/button/button';

export const Layout: FC = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log('btn clicked');
  }

  useEffect(() => {
    // dispatch(getShiftsThunk());
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <main className={styles.main}>
        <div>Navbar</div>
        <div>Outlet</div>
        {/* <Button onClick={onClick}>dsf</Button> */}
      </main>
    </div>
  );
};
