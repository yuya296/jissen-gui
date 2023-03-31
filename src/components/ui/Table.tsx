import MergedData from '../../types/MergedData';

type ColumnProps = {
    data: MergedData;
    onClick: ()=>void;
}

const NA = '#N/A';


const Column = ({ data, onClick }: ColumnProps) => {
    const rule = {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }
    return (
        
        <tr onClick={onClick}>
            <td className='text-start'>{data.code}</td>
            <td className='text-start'>{data.name}</td>
            <td className='text-center'>{data.maturity}</td>
            <td className='text-end'>{data.rate.toLocaleString('ja')}%</td>
            <td className='text-center'>{data.couponTimes}回</td>
            <td className='text-end'>{data.quantity.toLocaleString('ja', rule)}</td>
            <td className='text-end'>{data.bookValue.toLocaleString('ja', rule)}</td>
            <td className='text-end'>{data.marketValue?.toLocaleString('ja', rule) ?? NA}</td>
            <td className='text-end'>{data.profitAndLoss?.toLocaleString('ja', rule) ?? NA}</td>
        </tr>
    )
}

type TableProps = {
    positions: MergedData[];
    setDealTarget: (code: string) => void;
}

const Table = ({ positions, setDealTarget }: TableProps) => {
    return (
        <table className='table table-hover table-responsive'>
            <thead>
                <tr>
                    <th className='text-start'>銘柄コード</th>
                    <th className='text-start'>銘柄名</th>
                    <th className='text-center'>償還年月日</th>
                    <th className='text-center'>利率</th>
                    <th className='text-center'>クーポン回数</th>
                    <th className='text-center'>保有数量</th>
                    <th className='text-center'>簿価</th>
                    <th className='text-center'>時価</th>
                    <th className='text-center'>評価損益</th>
                </tr>
            </thead>

            <tbody>
                {positions.map(d => <Column data={d} key={d.code} onClick={()=>setDealTarget(d.code)}/>)}
            </tbody>
        </table>
    )
}



export default Table;