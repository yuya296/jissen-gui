import { ListGroup, Table } from "react-bootstrap"
import { Issue } from "../../types/Issue"
import MergedData from "../../types/MergedData";

type CustomTableProps = {
    data: MergedData[];
}

export const CustomTable = ({ data }: CustomTableProps) => {
    const exissues = data.map(datum => (
        <ListGroup.Item style={{ textAlign: 'left' }}>
            <div className="font-monospace">
                [{datum.code}]
            </div>
            <div className="fs-5">
                {datum.name}
            </div>
        </ListGroup.Item>
    ));
    const rule = {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }


    return (
            <Table striped hover>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className='text-start'>
                                <div className="font-monospace">{item.code}</div>
                                <div className="fs-5">{item.name}</div>
                            </td>
                            <td className="text-end" width={200}>
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