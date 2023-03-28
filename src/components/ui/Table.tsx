import MergedData from '../../types/MergedData';

type ColumnProps = {
    data: MergedData;
}

const NA = '#N/A';


const Column = ({data}: ColumnProps) => {
    const rule = {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }
    return (
        <tr>
            <td className='text-center'>{data.code}</td>
            <td className='text-center'>{data.name}</td>
            <td className='text-center'>{data.maturity}</td>
            <td className='text-end'>{data.rate.toLocaleString('ja',rule)}%</td>
            <td className='text-center'>{data.couponTimes}回</td>
            <td className='text-end'>{data.quantity.toLocaleString('ja',rule)}</td>
            <td className='text-end'>{data.bookValue.toLocaleString('ja',rule)}</td>
            <td className='text-end'>{data.marketValue?.toLocaleString('ja',rule)??NA}</td>
            <td className='text-end'>{data.profitAndLoss?.toLocaleString('ja',rule)??NA}</td>
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