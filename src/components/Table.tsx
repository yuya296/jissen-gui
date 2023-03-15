import axios from 'axios';
import React, { useState } from 'react';
import MergedData from './MergedData';

type ColumnProps = {
    data: MergedData;
}

const Column = ({data}: ColumnProps) => {
    return (
        <tr>
            <td>{data.code}</td>
            <td>{data.maturityDate}</td>
            <td>{data.rate}</td>
            <td>{data.name}</td>
            <td>{data.couponTimes}</td>
            <td>{data.quantity}</td>
            <td>{data.bookValue}</td>
            <td>{data.marketValue}</td>
            <td>{data.profitAndLoss}</td>
        </tr>
    )
}

type TableProps = {
    positions: MergedData[];
}

const Table = ({positions}: TableProps) => {
    const [data, setData] = useState<MergedData[]>(positions);

    const printList = data.map(d => <Column data={d} />)

    return (
        <table>
            <thead>
                <tr>
                    <th>銘柄コード</th>
                    <th>銘柄名</th>
                    <th>償還年月日</th>
                    <th>利率</th>
                    <th>クーポン回数</th>
                    <th>保有数量</th>
                    <th>簿価</th>
                    <th>時価</th>
                    <th>評価損益</th>
                </tr>
            </thead>

            <tbody>
                {printList}
            </tbody>
        </table>
    )

}



export default Table;