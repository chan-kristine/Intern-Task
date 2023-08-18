import React from 'react';
import { format } from 'date-fns';
import { MdDelete, MdEdit } from 'react-icons/md';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';

function TodoItem({ todo }) {
  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        <div className={styles.text}>
          <p
            className={getClasses([
              styles.todoText,
              todo.status === 'complete' && styles['todoText--complete'],
            ])}
          >
            {todo.title}
          </p>
          <p className={styles.time}>
            {format(new Date(todo.time), 'p, MM/dd/yyyy')}
          </p>
        </div>
      </div>
      <div className={styles.todoActions}>
        <div className={styles.icon}>
          <MdDelete />
        </div>
        <div className={styles.icon}>
          <MdEdit />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
