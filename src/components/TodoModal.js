import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss';
import { Button } from './Button';

function TodoModal({ modalOpen, setModalOpen }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');

  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setModalOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setModalOpen(false);
              }
            }}
            tabIndex={0}
            role="button"
          >
            <MdClose />
          </div>
          <form className={styles.form}>
            <h1 className={styles.formTitle}>Add Task</h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>
            <div className={styles.buttonContainer}>
              <Button type="submit" variant="primary">
                Add Task
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setModalOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setModalOpen(false);
                  }
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default TodoModal;
