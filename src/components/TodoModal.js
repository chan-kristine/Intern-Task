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
        <h1>This is from Modal</h1>
        {/* You can add more content here if needed */}
      </div>
    </div>
  );
}

export default TodoModal;
