import React, { useEffect, useState } from 'react';
import './App.css';
import { codes } from './test/Data';
import Table from './components/ui/Table';
import AddPosition from './components/AddPositionForm';
import MtMForm from './components/MtMForm';
import Modal from './components/ui/Modal';
import { Button } from 'react-bootstrap';

import { useTable } from './hooks/useTable';
import { useAddPositionForm } from './hooks/useAddPositionForm';
import Alert from './components/ui/Alert';
import { useMtMForm } from './hooks/useMtMForm';

import { Result } from './types/Result';

function App() {
  const { data, fetchTable, errorMessage } = useTable();
  const [valid, setValid] = useState('');

  const MODALS = {
    DEFAULT: 'default',
    ADD_POSITION: 'AddPosition',
    MTM: 'MtM',
  }
  const [modal, setModal] = useState(MODALS.DEFAULT);
  const closeModal = () => setModal(MODALS.DEFAULT);

  const [result, setResult] = useState<Result>({ message: '', succeeded: false, show: false });

  const addPositionHook = useAddPositionForm(setResult);
  const mtmHook = useMtMForm(setResult);


  useEffect(() => {
    console.log('useEffect was called.');
    fetchTable();
  }, [result])


  return (
    <div className="App">
      <div className='container-lg'>
        <h1>債権管理アプリ</h1>
        <Table positions={data} />

        <Button className='m-2' onClick={() => setModal(MODALS.ADD_POSITION)}>+ 在庫を追加する</Button>
        <Button className='m-2' onClick={() => setModal(MODALS.MTM)}>値洗い</Button>
        <Button className='m-2' onClick={() => fetchTable()}>リロード</Button>

        <Modal
          show={modal === MODALS.ADD_POSITION}
          title="在庫を追加する"
          body={<AddPosition codes={codes} submit={addPositionHook.addPosition} close={closeModal} reload={()=>{}} />}
          onHide={closeModal}
          footer={
            <>
              <Button variant="secondary" onClick={closeModal}>キャンセル</Button>
              <Button type="submit" form='addPosition' variant={"primary " + valid} >追加</Button>
            </>
          }
        >
        </Modal>

        <Modal
          show={modal === MODALS.MTM}
          title='値洗いを実行する'
          body={<MtMForm codes={codes} submit={mtmHook.mtm} close={closeModal} reload={fetchTable} />}
          onHide={closeModal}
          footer={
            <>
              <Button variant="secondary" onClick={closeModal}>キャンセル</Button>
              <Button type="submit" form='addPosition' variant={"primary " + valid} >実行</Button>
            </>
          }
        >

        </Modal>

        <Alert
          alertState={result}
          close={() => setResult({show:false, succeeded:result.succeeded, message:result.message})}
        />
      </div>
    </div>
  );
}

export default App;
