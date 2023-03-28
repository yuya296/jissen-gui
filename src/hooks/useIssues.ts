import { useState } from 'react';
import apiClient from '../lib/ApiClient';
import MergedData from '../types/MergedData';
import { AxiosResponse } from 'axios';
import { Issue } from '../types/Issue';

export const useIssues = () => {
    const [issues, setIssues] = useState<Issue[]>([]);
    const fetchIssues = async () => {

        await apiClient
            .get('/issues')
            .then((response: AxiosResponse<Issue[]>) => {
                setIssues(response.data);
            })
            .catch(e => {
                setIssues([]);
            })
    }

    return {
        issues,
        fetchIssues,
    }
}