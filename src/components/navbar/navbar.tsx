import { FC } from 'react';
import { CalendarIcon, FileCheckIcon, NoteEditIcon, UsersIcon } from '../../ui/icons';
import { requests, shifts, userTasks } from '../../utils/navbar-config';
import { Dropdown } from '../dropdown/dropdown';
import { NavbarElement } from '../navbar-element/navbar-element';

import styles from './navbar.module.css';

export const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.navbar__container}>
        <Dropdown
          text='Смены'
          icon={<CalendarIcon type='link' />}
          activeIcon={<CalendarIcon type='link-active' />}
        >
          <ul>
            {shifts.map((shift, index) => {
              return <NavbarElement key={index} title={shift.title} />;
            })}
          </ul>
        </Dropdown>
        <Dropdown
          icon={<NoteEditIcon type='link' />}
          activeIcon={<NoteEditIcon type='link-active' />}
          text='Заявки на участие'
        >
          <ul>
            {requests.map((request, index) => {
              return <NavbarElement key={index} title={request.title} />;
            })}
          </ul>
        </Dropdown>
        <Dropdown
          icon={<UsersIcon type='link' />}
          activeIcon={<UsersIcon type='link-active' />}
          text='Участники проекта'
        ></Dropdown>
        <Dropdown
          icon={<FileCheckIcon type='link' />}
          activeIcon={<FileCheckIcon type='link-active' />}
          text='Отчеты участников'
        >
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
