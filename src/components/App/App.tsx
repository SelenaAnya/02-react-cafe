import React from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import css from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
};

export default App;
