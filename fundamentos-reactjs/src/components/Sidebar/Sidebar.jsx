import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1642697283420-194938fcc339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/marianacamrg.png" />
        <strong>Mariana Camargo</strong>
        <span>Full Stack</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
