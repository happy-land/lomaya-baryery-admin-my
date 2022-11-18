import { FC } from 'react';
import { requests, shifts, userTasks } from '../../utils/navbar-config';
import { Dropdown } from '../dropdown/dropdown';
import { NavbarElement } from '../navbar-element/navbar-element';

import styles from './navbar.module.css';

export const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.navbar__container}>
        <Dropdown text='Смены'>
          <ul>
            {shifts.map((shift, index) => {
              return <NavbarElement key={index} title={shift.title} />;
            })}
          </ul>
        </Dropdown>
        <Dropdown text='Заявки на участие'>
          <ul>
            {requests.map((request, index) => {
              return <NavbarElement key={index} title={request.title} />;
            })}
          </ul>
        </Dropdown>
        <Dropdown text='Участники проекта'></Dropdown>
        <Dropdown text='Отчеты участников'>
          <ul>
            {userTasks.map((task, index) => {
              return <NavbarElement key={index} title={task.title} />;
            })}
          </ul>
        </Dropdown>
      </nav>
    </div>
  );
};
