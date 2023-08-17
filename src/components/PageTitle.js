import React from 'react';

function PageTitle({ children }) {
  return (
    <div className="container">
      <h1>{children}</h1>
    </div>
  );
}

export default PageTitle;
