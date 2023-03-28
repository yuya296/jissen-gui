import { useState } from "react";
import apiClient from "../lib/ApiClient";
type MtMFormProps = {
    code: string;
    marketValue: number;
}

type useMtMFormProps = {
    setAlertMessage: any;
    setAlertColor: any;
    setShowAlert: any;
}

export const useMtMForm = ({setAlertMessage, setAlertColor, setShowAlert}:useMtMFormProps) => {
    const [isSucceeded, setSucceeded] = useState<boolean>();
    const [errorMessage, setErrorMessage] = useState<string>('');

    const mtm = async (data:MtMFormProps) => {
        setErrorMessage('');

        await apiClient
            .put('/mtm', {
                code: data.code,
                marketValue: data.marketValue
            })
            .then(response => {
                setSucceeded(true);
                setAlertMessage(`値洗いに成功しました: [${data.code}] 時価:${data.marketValue}`);
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
        mtm,
        isSucceeded,
        errorMessage,
    }
}