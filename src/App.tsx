import React from 'react';
import './App.css';
import { initialdata, codes } from './components/Data';
import Table from './components/Table';
import AddPosition from './components/AddPosition';
import Modal from './components/Modal'

function App() {
  return (
    <div className="App">
      <div className='container-lg'>
        <h1>債権管理アプリ</h1>

        <Modal 
          title='在庫を追加する'
          onClick={() => alert('click')}
        >
          <AddPosition codes={codes} />
        </Modal>

        <Table positions={initialdata} />

      </div>
    </div>
  );
}

export default App;
