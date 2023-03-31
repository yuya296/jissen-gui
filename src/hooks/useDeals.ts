import { useState } from 'react';
import apiClient from '../lib/ApiClient';
import Deal from '../types/Deal';
import { Result } from '../types/Result';


type DealsProps = {
    code: string;
}

export const useDeals = (setResult: (as:Result)=>void) => {
    const [deals, setDeals] = useState<Array<Deal>>([]);
    const fetchDeals = async (code:string) => {

        await apiClient
            .get(`/deals/${code}`)
            .then(response => {
                setDeals(response.data);
            })
            .catch(e => {
                setDeals([]);
            })
    }

    const deleteDeal = async (id:string) => {
        await apiClient
            .delete(`/deals/delete/${id}`)
            .then(response => {
                setResult({
                    succeeded: true,
                    show:true,
                    message: `削除に成功しました`,
                })
            })
            .catch(e => {
                setResult({
                    succeeded: false,
                    show:true,
                    message: `削除に失敗しました: ${e.message}`,
                })

            })
    }

    return {
        deals,
        fetchDeals,
        deleteDeal,
    }
}