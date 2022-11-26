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
          <ul className={styles.navbar__menu}>
            {shifts.map((shift, index) => {
              return <NavbarElement key={index} title={shift.title} link={shift.link} section={shift.section} />;
            })}
          </ul>
        </Dropdown>
        <Dropdown
          icon={<NoteEditIcon type='link' />}
          activeIcon={<NoteEditIcon type='link-active' />}
          text='Заявки на участие'
        >
          <ul className={styles.navbar__menu}>
            {requests.map((request, index) => {
              return <NavbarElement key={index} title={request.title} link={request.link} section={request.section} />;
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
          <ul className={styles.navbar__menu}>
            {userTasks.map((task, index) => {
              return <NavbarElement key={index} title={task.title} link={task.link} section={task.section} />;
            })}
          </ul>
        </Dropdown>
      </nav>
    </div>
  );
};
