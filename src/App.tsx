import React, { useState, useContext } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import './App.css';
import { codes } from './test/Data';
import Table from './components/ui/Table';
import AddPosition from './components/AddPositionForm';
import MergedData from './types/MergedData';
import Modal from './components/ui/Modal';
import { Button } from 'react-bootstrap';

import { useTable } from './hooks/useTable';


function App() {

  const {data, fetchTable, errorMessage} = useTable();
  const [show, setShow] = useState(false);
  const [valid, setValid] = useState('disabled');

  // const addPosition = () => {
  //   const options: AxiosRequestConfig = {
  //     url: `${url}/positions/add`,
  //     method: "POST",
  //     data: {
  //       code: 'item01',
  //       quantity: 100,
  //       bookValue: 300,
  //     }
  //   }
  //   axios(options)
  //     .then((response: AxiosResponse<MergedData[]>) => {
  //       setData(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     })
  // }

  return (
    <div className="App">
      <div className='container-lg'>
        <h1>債権管理アプリ</h1>
        <Table positions={data} />

        {/* <button onClick={addPosition}>test</button> */}

        <Button onClick={() => setShow(!show)}>＋ 在庫を追加する</Button>
        <Button onClick={() => fetchTable()}>リロード</Button>
        <Modal
          show={show}
          title="在庫を追加する"
          body={<AddPosition codes={codes} />}
          onHide={()=>setShow(false)}
          footer={
            <>
              <Button variant="secondary" onClick={() => setShow(false)}>キャンセル</Button>
              <Button variant={"primary " + valid} onClick={() => setShow(false)}>追加</Button>
            </>
          }
        >
        </Modal>

      </div>
    </div>
  );
}

export default App;
