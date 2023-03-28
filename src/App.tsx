import React, { useEffect, useState } from 'react';
import './App.css';

// import { codes } from './test/Data';

// components
import AddPosition from './components/AddPositionForm';
import MtMForm from './components/MtMForm';
import Table from './components/ui/Table';
import Modal from './components/ui/Modal';
import Alert from './components/ui/Alert';
import { Button } from 'react-bootstrap';

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
    DEFAULT: 'default',
    ADD_POSITION: 'AddPosition',
    MTM: 'MtM',
  }
  const [modal, setModal] = useState(MODALS.DEFAULT);
  const closeModal = () => setModal(MODALS.DEFAULT);

  const [result, setResult] = useState<Result>({ message: '', succeeded: false, show: false });

  const { addPosition } = useAddPositionForm(setResult);
  const { mtm } = useMtMForm(setResult);
  const { issues, fetchIssues } = useIssues();

  useEffect(() => { fetchIssues() }, []);
  useEffect(() => { fetchTable() }, [result]);

  return (
    <div className="App">
      <div className='container-lg'>
        <h1>債権管理アプリ</h1>
        <Table positions={data} />

        <Button variant='outline-primary' onClick={() => setModal(MODALS.ADD_POSITION)}>+ 在庫を追加する</Button>{' '}
        <Button variant='primary' onClick={() => setModal(MODALS.MTM)}>値洗い</Button>

        <Modal title="在庫を追加する"
          show={modal === MODALS.ADD_POSITION}
          body={<AddPosition codes={issues.map(i => i.code)} submit={addPosition} close={closeModal} />}
          onHide={closeModal}
          footer={
            <>
              <Button variant="secondary" onClick={closeModal}>キャンセル</Button>
              <Button type="submit" form='addPosition' variant={"primary " + valid} >追加</Button>
            </>
          }
        >
        </Modal>

        <Modal title='値洗いを実行する'
          show={modal === MODALS.MTM}
          body={<MtMForm codes={issues.map(i => i.code)} submit={mtm} close={closeModal} />}
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
          close={() => setResult({ show: false, succeeded: result.succeeded, message: result.message })}
        />
      </div>
    </div>
  );
}

export default App;
