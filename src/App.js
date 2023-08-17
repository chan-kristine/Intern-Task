import React from 'react';
import PageTitle from './components/PageTitle';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import style from './styles/modules/app.module.scss';

function App() {
  return (
    <div className="container">
      <PageTitle>TO-DO LIST</PageTitle>
      <div className={style.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
