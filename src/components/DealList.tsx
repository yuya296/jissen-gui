import { Button, Table } from "react-bootstrap";
import { useDeals } from "../hooks/useDeals";
import Deal from "../types/Deal";


type ColumnProps = {
    deal: Deal;
    del: (id:string)=>void;
}

const Column = ({ deal, del }: ColumnProps) => {
    const rule = {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }
    return (
        <tr key={deal.id}>
            <td className="text-start">{deal.timestamp}</td>
            <td className='text-end'>{deal.quantity.toLocaleString('ja', rule)}</td>
            <td className='text-end'>{deal.bookValue.toLocaleString('ja', rule)}</td>
            <td className="text-end">
                <Button 
                    variant="outline-danger" 
                    size="sm" 
                    onClick={()=>del(deal.id.toString())}
                >
                    取消
                </Button>
            </td>
        </tr>
    )
}

type DealListProps = {
    deals: Deal[];
    del: (id:string)=>void;
}

const DealList = ({ deals, del }: DealListProps) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th className="text-start">Timestamp</th>
                    <th className="text-end">数量</th>
                    <th className="text-end">価格</th>
                </tr>

            </thead>
            <tbody>
                {deals.map(d => (
                    <Column deal={d} del={del} />
                ))}

            </tbody>
        </Table>
    )
}

export default DealList;