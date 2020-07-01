import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { TransactionList } from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
