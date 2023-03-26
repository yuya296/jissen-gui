import apiClient from '../lib/ApiClient';

const getTable = () => {
    const fetchTable =async () => {
        await apiClient
            .get('/table')
            .then(response => {
                return response.data;
            })
            .catch(e => {
                alert(e.message);
                return [];
            })
    }
}

const addPosition = () => {
    const postPosition = async () => {
        await apiClient
            .post('/positions/add', {
                code: 'item01',
                quantity: 100,
                bookValue: 100,
            })
            .then(response => {
                return response.data;
            })
            .catch(e => {
                alert(e);
                return {};
            })
    }
}

export {getTable };