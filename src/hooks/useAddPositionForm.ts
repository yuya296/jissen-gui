import { useState } from 'react';
import apiClient from '../lib/ApiClient';
import { Result } from '../types/Result';

type AddPositionProps = {
    code: string;
    quantity: number;
    bookValue: number;
}


export const useAddPositionForm = (setResult:(as:Result)=>void) => {
    const [isSucceeded, setSucceeded] = useState<boolean>();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const addPosition = async (data:AddPositionProps) => {
        setErrorMessage('');

        await apiClient
            .post('/positions/add', {
                code: data?.code,
                quantity: data?.quantity,
                bookValue: data?.bookValue,
            })
            .then(response => {
                setSucceeded(true);
                setResult({
                    succeeded: true,
                    show: true,
                    message: `追加しました: [${data.code}] 数量:${data.quantity} 簿価:${data.bookValue}`,
                })
            })
            .catch(e => {
                setSucceeded(false);
                setErrorMessage(e.message);
                setResult({
                    succeeded: false,
                    show:true,
                    message: `追加に失敗しました: ${e.message}`,
                })
            })
    }

    return {
        addPosition,
        isSucceeded,
        errorMessage,
    }
}