import React, { useState } from 'react';
import './App.css';
import { codes } from './test/Data';
import Table from './components/ui/Table';
import AddPosition from './components/AddPositionForm';
import Modal from './components/ui/Modal';
import { Button } from 'react-bootstrap';

import { useTable } from './hooks/useTable';
import { useAddPositionForm } from './hooks/useAddPositionForm';


function App() {

  const { data, fetchTable, errorMessage } = useTable();
  const [show, setShow] = useState(false);
  const [valid, setValid] = useState('');
  const addPositionHook = useAddPositionForm();


  return (
    <div className="App">
      <div className='container-lg'>
        <h1>債権管理アプリ</h1>
        <Table positions={data} />

        <Button onClick={() => setShow(!show)}>＋ 在庫を追加する</Button>
        <Button onClick={() => fetchTable()}>リロード</Button>
        <Modal
          show={show}
          title="在庫を追加する"
          body={<AddPosition codes={codes} submit={addPositionHook.addPosition} close={()=>setShow(false)} reload={fetchTable} />}
          onHide={() => setShow(false)}
          footer={
            <>
              <Button variant="secondary" onClick={() => setShow(false)}>キャンセル</Button>
              <Button type="submit" form='addPosition' variant={"primary " + valid} >追加</Button>
            </>
          }
        >
        </Modal>
      </div>
    </div>
  );
}

export default App;
