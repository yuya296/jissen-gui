import React, { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import './App.css';
import { initialdata, codes } from './test/Data';
import Table from './components/Table';
import AddPosition from './components/AddPositionForm';
import MergedData from './types/MergedData';

import Modal from './components/ui/Modal';
import { Button } from 'react-bootstrap';


const url = 'http://localhost:8080';

function App() {
  const getMergedData = () => {
    let ans: MergedData[] = [];
    axios
      .get(`${url}/table`)
      .then(response => {
        ans = response.data;
      })
      .catch(e => {
        alert(e.message)
      })
    return ans;
  }

  // ここにstateとしてデータをもたせて更新する→TableとかModalは再レンダリングされる
  const [data, setData] = useState<MergedData[]>(getMergedData());

  const addPosition = () => {
    const options: AxiosRequestConfig = {
      url: `${url}/positions/add`,
      method: "POST",
      data: {
        code: 'item01',
        quantity: 100,
        bookValue: 300,
      }
    }
    axios(options)
      .then((response: AxiosResponse<MergedData[]>) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e.message);
      })
  }

  const [show, setShow] = useState(false);
  const [valid, setValid] = useState('disabled');


  return (
    <div className="App">
      <div className='container-lg'>
        <h1>債権管理アプリ</h1>
        <Table positions={data} />

        <button onClick={addPosition}>test</button>

        <Button onClick={() => setShow(!show)}>＋ 在庫を追加する</Button>
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
