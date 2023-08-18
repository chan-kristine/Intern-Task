import React from 'react';
import { MdClose } from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss';
import { Button } from './Button';

function TodoModal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButton}>
          <MdClose />
        </div>
        <form className={styles.form}>
          <h1 className={styles.formTitle}>Add Task</h1>
          <label htmlFor="title">
            Title
            <input type="text" id="title" />
          </label>
          <label htmlFor="status">
            Status
            <select name="status" id="status">
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </label>
          <div className={styles.buttonContainer}>
            <Button type="submit" variant="primary">
              Add Task {/* Move the text inside the Button component */}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;
