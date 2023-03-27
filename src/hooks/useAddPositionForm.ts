import { useState } from 'react';
import apiClient from '../lib/ApiClient';

type AddPositionProps = {
    code: string;
    quantity: number;
    bookValue: number;
}

type useAddPositionFormProps = {
    setAlertMessage: any;
    setAlertColor: any;
    setShowAlert: any;
}

export const useAddPositionForm = ({setAlertMessage, setAlertColor, setShowAlert}:useAddPositionFormProps) => {
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
                setAlertMessage(`追加しました: [${data.code}] 数量:${data.quantity} 簿価:${data.bookValue}`);
                setAlertColor('primary');
                setShowAlert(true);
            })
            .catch(e => {
                setSucceeded(false);
                setErrorMessage(e.message);
                setAlertColor('danger');
                setAlertMessage(`追加に失敗しました: ${e.message}`);
                setShowAlert(true);
            })
    }

    return {
        addPosition,
        isSucceeded,
        errorMessage,
    }
}