import { useState } from 'react';
import apiClient from '../lib/ApiClient';
import MergedData from '../types/MergedData';

export const useTable = () => {
    const [data, setData] = useState<Array<MergedData>>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const fetchTable = async () => {
        setErrorMessage('');

        await apiClient
            .get('/table')
            .then(response => {
                setData(response.data);
            })
            .catch(e => {
                setErrorMessage(e.message);
                setData([]);
            })
    }

    return {
        data,
        fetchTable,
        errorMessage,
    }
}