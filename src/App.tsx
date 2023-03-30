import React, { useEffect, useState } from 'react';
import './App.css';

// components
import AddPosition from './components/AddPositionForm';
import MtMForm from './components/MtMForm';
import Table from './components/ui/Table';
import Alert from './components/ui/Alert';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Modal } from './components/ui/Modal';

// hooks
import { useTable } from './hooks/useTable';
import { useAddPositionForm } from './hooks/useAddPositionForm';
import { useMtMForm } from './hooks/useMtMForm';

// types
import { Result } from './types/Result';
import { useIssues } from './hooks/useIssues';

import { AiFillEdit, AiOutlinePlus } from 'react-icons//ai';
import LOGO from './React-icon.svg';


function App() {
  const { data, fetchTable } = useTable();

  const MODALS = {
    CLOSE: 'default',
    ADD_POSITION: 'AddPosition',
    MTM: 'MtM',
  }
  const [modal, setModal] = useState<string>(MODALS.CLOSE);

  const [result, setResult] = useState<Result>({ message: '', succeeded: false, show: false });
  const hideAlert = () => setResult({ message: '', succeeded: false, show: false })

  const { addPosition } = useAddPositionForm(setResult);
  const { mtm } = useMtMForm(setResult);
  const { issues, fetchIssues, codes } = useIssues();

  useEffect(() => { fetchIssues() }, []);
  useEffect(() => { setTimeout(fetchTable, 800) }, [result]);

  return (
    <div className="App">
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className='mb-2'>
        <div className='container-lg' >
          <Navbar.Brand href="#">
            <img src={LOGO} width='30' height='30' alt='logo' className='mx-2' />
            債券管理アプリ
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='mr-aoto'>
              <Nav.Link href="#">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </div>
      </Navbar>

      <div className='container-lg'>

        <div className='text-end mb-2'>
          <Button variant='outline-dark' onClick={() => setModal(MODALS.ADD_POSITION)}>
            <AiOutlinePlus /> 在庫を追加する
          </Button>{' '}
          <Button variant='outline-dark' onClick={() => setModal(MODALS.MTM)}><AiFillEdit /> 値洗いを実行する</Button>
        </div>
        <Table positions={data} />


        <Modal title="在庫を追加する"
          show={modal === MODALS.ADD_POSITION}
          onHide={() => setModal(MODALS.CLOSE)}
          formId="addPosition"
        >
          <AddPosition issues={issues} submit={addPosition} />
        </Modal>

        <Modal title="値洗いを実行する"
          show={modal === MODALS.MTM}
          onHide={() => setModal(MODALS.CLOSE)}
          formId="mtm"
        >
          <MtMForm issues={issues} submit={mtm} />
        </Modal>


        <Alert result={result} close={hideAlert} />
      </div>
    </div>
  );
}

export default App;
