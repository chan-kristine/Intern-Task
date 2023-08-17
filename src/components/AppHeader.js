import React from 'react';
import { Button, SelectButton } from './Button';

function AppHeader() {
  return (
    <div>
      <h1> Hello from header </h1>
      <Button variant="primary">Click Me</Button>
      <SelectButton>
        <option value="all">ALL</option>
        <option value="incomplete">incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
    </div>
  );
}

export default AppHeader;
