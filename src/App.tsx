import React from 'react';
import logo from './logo.svg';
import './App.css';
import { initialdata, codes } from './components/Data';
import Table from './components/Table';
import AddPosition from './components/AddPosition';

function App() {
  return (
    <div className="App">
      <div className='container-lg'>
        <h1>債権管理アプリ</h1>
        <Table positions={initialdata} />
        <AddPosition />
      </div>
    </div>
  );
}

export default App;
