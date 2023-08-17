import React, { Children } from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ children, type, variant = 'primary' }) {
  return (
    <button
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes[variant]}`], // Use styles instead of style
      ])}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
}

export default Button;
