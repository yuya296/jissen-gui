import { useState } from "react";
import apiClient from "../lib/ApiClient";
import { Result } from "../types/Result";
type MtMFormProps = {
    code: string;
    marketValue: number;
}


export const useMtMForm = (setAlertState:(as:Result)=>void) => {
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
                setAlertState({
                    succeeded: true,
                    show: true,
                    message:`値洗いに成功しました: [${data.code}] 時価:${data.marketValue}`,
                })
            })
            .catch(e => {
                setSucceeded(false);
                setErrorMessage(e.message);
                setAlertState({
                    succeeded: true,
                    show: true,
                    message: `追加に失敗しました: ${e.message}`,
                })
            })
        
    }

    return {
        mtm,
        isSucceeded,
        errorMessage,
    }
}