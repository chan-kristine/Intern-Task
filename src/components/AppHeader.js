import React, { useState } from 'react';
import { Button, SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.appHeader}>
      {/* Set the onClick handler to open the modal */}
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status">
        <option value="all">ALL</option>
        <option value="incomplete">incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />{' '}
      {/* Pass the props */}
    </div>
  );
}

export default AppHeader;
