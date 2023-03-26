import MergedData from '../../types/MergedData';

type ColumnProps = {
    data: MergedData;
}

const NA = '#N/A';


const Column = ({data}: ColumnProps) => {
    return (
        <tr>
            <td>{data.code}</td>
            <td>{data.name}</td>
            <td>{data.maturityDate}</td>
            <td>{data.rate.toFixed(1)}</td>
            <td>{data.couponTimes}</td>
            <td>{data.quantity.toFixed(1)}</td>
            <td>{data.bookValue.toFixed(1)}</td>
            <td>{data.marketValue?.toFixed(1)??NA}</td>
            <td>{data.profitAndLoss?.toFixed(1)??NA}</td>
        </tr>
    )
}

type TableProps = {
    positions: MergedData[];
}

const Table = ({positions}: TableProps) => {
    return (
        <table className='table table-hover'>
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
                {positions.map(d => <Column data={d} key={d.code} />)}
            </tbody>
        </table>
    )
}



export default Table;