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
  const [showModal, setShowModal] = useState(false);
  const [showMtMModal, setShowMtMModal] = useState(false);
  const [valid, setValid] = useState('');

  const [alertState, setAlertState] = useState<Result>({ message: '', succeeded: false, show: false });

  const addPositionHook = useAddPositionForm(setAlertState);
  const mtmHook = useMtMForm(setAlertState);


  //Todo: useEffectを使えばuseTable不要なのでは？

  useEffect(() => {
    console.log('useEffect was called.');
    fetchTable();
  }, [alertState])


  return (
    <div className="App">
      <div className='container-lg'>
        <h1>債権管理アプリ</h1>
        <Table positions={data} />

        <Button className='m-2' onClick={() => setShowModal(!showModal)}>+ 在庫を追加する</Button>
        <Button className='m-2' onClick={() => setShowMtMModal(true)}>値洗い</Button>
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

        <Modal
          show={showMtMModal}
          title='値洗いを実行する'
          body={<MtMForm codes={codes} submit={mtmHook.mtm} close={() => setShowMtMModal(false)} reload={fetchTable} />}
          onHide={() => setShowMtMModal(false)}
          footer={
            <>
              <Button variant="secondary" onClick={() => setShowMtMModal(false)}>キャンセル</Button>
              <Button type="submit" form='addPosition' variant={"primary " + valid} >実行</Button>
            </>
          }
        >

        </Modal>

        <Alert
          alertState={alertState}
          close={() => setAlertState({show:false, succeeded:alertState.succeeded, message:alertState.message})}
        />
      </div>
    </div>
  );
}

export default App;
