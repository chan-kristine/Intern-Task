import React from 'react';
import { MdClose } from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss';

function TodoModal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButton}>
          <MdClose />
        </div>
        <form>
          <h1 className={styles.formTitle}>Add Task</h1>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;
