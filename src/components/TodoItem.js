import React, { useState } from 'react';
import { format } from 'date-fns';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import styles from '../styles/modules/todoItem.module.scss';
import TodoModal from './TodoModal';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const handleCheckboxChange = () => {
    const updatedStatus =
      todo.status === 'complete' ? 'incomplete' : 'complete';
    dispatch(
      updateTodo({ id: todo.id, status: updatedStatus, title: todo.title })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  const handleCloseModal = () => {
    setUpdateModalOpen(false);
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <input
            type="checkbox"
            checked={todo.status === 'complete'}
            onChange={handleCheckboxChange}
          />
          <div className={styles.texts}>
            <p
              className={[
                styles.todoText,
                todo.status === 'complete' && styles['todoText--complete'],
              ].join(' ')}
            >
              {todo.title}
            </p>
            <p className={styles.time}>
              {format(new Date(todo.time), 'p, MM/dd/yyyy')}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
        </div>
      </div>
      <TodoModal
        type="update"
        todo={todo}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        onClose={handleCloseModal}
        status={todo.status}
      />
    </>
  );
}

export default TodoItem;
