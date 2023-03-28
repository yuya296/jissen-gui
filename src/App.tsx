import React, { useEffect, useState } from 'react';
import './App.css';

// import { codes } from './test/Data';

// components
import AddPosition from './components/AddPositionForm';
import MtMForm from './components/MtMForm';
import Table from './components/ui/Table';
import Alert from './components/ui/Alert';
import { Modal, Button } from 'react-bootstrap';

// hooks
import { useTable } from './hooks/useTable';
import { useAddPositionForm } from './hooks/useAddPositionForm';
import { useMtMForm } from './hooks/useMtMForm';

// types
import { Result } from './types/Result';
import { useIssues } from './hooks/useIssues';


function App() {
  const { data, fetchTable } = useTable();
  const [valid, setValid] = useState('');

  const MODALS = {
    X: 'default',
    ADD_POSITION: 'AddPosition',
    MTM: 'MtM',
  }
  const [modal, setModal] = useState(MODALS.X);
  const closeModal = () => setModal(MODALS.X);

  const [result, setResult] = useState<Result>({ message: '', succeeded: false, show: false });

  const { addPosition } = useAddPositionForm(setResult);
  const { mtm } = useMtMForm(setResult);
  const { issues, fetchIssues, codes } = useIssues();

  useEffect(() => { fetchIssues() }, []);
  useEffect(() => { fetchTable() }, [result]);

  return (
    <div className="App">
      <div className='container-lg'>
        <h1>債権管理アプリ</h1>
        <Table positions={data} />

        <Button variant='primary' onClick={() => setModal(MODALS.ADD_POSITION)}>+ 在庫を追加する</Button>{' '}
        <Button variant='primary' onClick={() => setModal(MODALS.MTM)}>値洗い</Button>

        <Modal show={modal === MODALS.ADD_POSITION} onHide={closeModal}>
          <Modal.Header closeButton><Modal.Title>在庫を追加する</Modal.Title></Modal.Header>
          <Modal.Body>
            <AddPosition codes={codes} submit={addPosition} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>キャンセル</Button>
            <Button type="submit" form='addPosition' variant={"primary " + valid} onClick={() => setModal(MODALS.X)} >追加</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={modal === MODALS.MTM} onHide={closeModal}>
          <Modal.Header closeButton><Modal.Title>値洗いを実行する</Modal.Title></Modal.Header>
          <Modal.Body>
            <MtMForm codes={codes} submit={mtm}></MtMForm>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>キャンセル</Button>
            <Button type="submit" form='addPosition' variant={"primary " + valid } onClick={() => setModal(MODALS.X)} >実行</Button>
          </Modal.Footer>
        </Modal>


        <Alert
          alertState={result}
          close={() => setResult({ show: false, succeeded: result.succeeded, message: result.message })}
        />
      </div>
    </div>
  );
}

export default App;
