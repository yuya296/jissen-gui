import { useState } from 'react';
import apiClient from '../lib/ApiClient';

type AddPositionProps = {
    code: string;
    quantity: number;
    bookValue: number;
}

export const useAddPositionForm = () => {
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
            })
            .catch(e => {
                setSucceeded(false);
                setErrorMessage(e.message);
            })
    }

    return {
        addPosition,
        isSucceeded,
        errorMessage,
    }
}