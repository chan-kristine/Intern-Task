import React from 'react';
import { Toaster } from 'react-hot-toast';
import PageTitle from './components/PageTitle';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import appStyles from './styles/modules/app.module.scss';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TO-DO LIST</PageTitle>
        <div className={appStyles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
