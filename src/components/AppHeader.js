import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import { updateFilterStatus, deleteAllTasks } from '../slices/todoSlice';
import TodoModal from './TodoModal';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  const handleDeleteAllTasks = () => {
    dispatch(deleteAllTasks());
  };

  return (
    <div className={styles.appHeader}>
      <div className={styles.buttonContainer}>
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Add Task
        </Button>
        <Button variant="danger" onClick={handleDeleteAllTasks}>
          <MdDelete />
        </Button>
      </div>
      <SelectButton
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
