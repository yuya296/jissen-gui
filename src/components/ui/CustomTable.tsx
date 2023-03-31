import { ListGroup, Table } from "react-bootstrap"
import { Issue } from "../../types/Issue"
import MergedData from "../../types/MergedData";

type CustomTableProps = {
    data: MergedData[];
}

export const CustomTable = ({ data }: CustomTableProps) => {
    const rule = {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }

    return (
            <Table hover>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className='text-start'>
                                <div className="font-monospace text-success">{item.code}</div>
                                <div className="fs-5 fw-bold">{item.name}</div>
                                <div className="text-secondary fw-bold">
                                    利率: {item.rate} % | 
                                    償還: {item.maturity} | 
                                    クーポン: {item.couponTimes} 回
                                </div>
                            </td>
                            <td className="text-end align-middle" width={200}>
                                <div>数量: {item.quantity.toLocaleString('ja',rule)} 円</div>
                                <div>簿価: {item.bookValue.toLocaleString('ja',rule)} 円</div>
                                <div>時価: {item.marketValue?.toLocaleString('ja',rule)??'#N/A'} 円</div>
                                <div>評価損益: {item.profitAndLoss?.toLocaleString('ja',rule)??'#N/A'} 円</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    )
}