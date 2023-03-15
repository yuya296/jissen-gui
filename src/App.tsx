import React from 'react';
import logo from './logo.svg';
import './App.css';
import {initialdata, codes} from './components/Data';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <h1>債権管理アプリ</h1>
      <Table positions={initialdata} />
    </div>
  );
}

export default App;
