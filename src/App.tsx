import React, { useEffect, useState } from 'react';
import './App.css';
import { codes } from './test/Data';
import Table from './components/ui/Table';
import AddPosition from './components/AddPositionForm';
import Modal from './components/ui/Modal';
import { Button } from 'react-bootstrap';

import { useTable } from './hooks/useTable';
import { useAddPositionForm } from './hooks/useAddPositionForm';
import Alert from './components/ui/Alert';

function App() {
  const { data, fetchTable, errorMessage } = useTable();
  const [showModal, setShowModal] = useState(false);
  const [valid, setValid] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertColor, setAlertColor] = useState('green');
  const [alertMessage, setAlertMessage] = useState('こんちわ');
  const addPositionHook = useAddPositionForm({setAlertMessage, setAlertColor, setShowAlert});

  //Todo: useEffectを使えばuseTable不要なのでは？

  useEffect(()=>{
    console.log('useEffect was called.');
    fetchTable();
  },[])


  return (
    <div className="App">
      <div className='container-lg'>
        <h1>債権管理アプリ</h1>
        <Table positions={data} />

        <Button className='m-2' onClick={() => setShowModal(!showModal)}>＋ 在庫を追加する</Button>
        <Button className='m-2' onClick={() => fetchTable()}>リロード</Button>
        <Modal
          show={showModal}
          title="在庫を追加する"
          body={<AddPosition codes={codes} submit={addPositionHook.addPosition} close={() => setShowModal(false)} reload={fetchTable} />}
          onHide={() => setShowModal(false)}
          footer={
            <>
              <Button variant="secondary" onClick={() => setShowModal(false)}>キャンセル</Button>
              <Button type="submit" form='addPosition' variant={"primary " + valid} >追加</Button>
            </>
          }
        >
        </Modal>
        <Alert 
          message={alertMessage}
          color={alertColor}
          show={showAlert}
          close={()=>setShowAlert(false)}
        />
      </div>
    </div>
  );
}

export default App;
