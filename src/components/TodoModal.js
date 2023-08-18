import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';
import { addTodo } from '../slices/todoSlice';
import styles from '../styles/modules/modal.module.scss';
import { Button } from './Button';

function TodoModal({ type, modalOpen, setModalOpen }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      toast.error('Please enter a title');
      return;
    }

    if (type === 'add') {
      const newTodo = {
        id: uuid(),
        title,
        status,
        time: new Date().toLocaleDateString(),
      };
      dispatch(addTodo(newTodo));
      toast.success('Task added successfully!');
    } else if (type === 'update') {
      console.log('Updating task');
    }

    setModalOpen(false);
  };

  return modalOpen ? (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.closeButton}
          onClick={handleClose}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleClose();
            }
          }}
          role="button"
          tabIndex={0}
        >
          <MdClose />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.formTitle}>
            {type === 'update' ? 'Update' : 'Add'} Task
          </h1>
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
              {type === 'update' ? 'Update' : 'Add'} Task
            </Button>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
}

export default TodoModal;
