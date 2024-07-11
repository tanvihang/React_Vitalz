import { useState, useCallback } from 'react';

export const useFetchAPI = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (params = {}) => {
        setLoading(true);
        try {
            const queryParams = new URLSearchParams(params).toString();
            const fullUrl = queryParams ? `${url}?${queryParams}` : url;

            let response;
            if(params.type == "sleep"){
                response = await fetch(`/assets/sampleData/userSleepData/${params.userName}.json`);
            }else{
                response = await fetch(`/assets/sampleData/userAnalysisData/${params.userName}.json`);
            }
            // const response = await fetch(fullUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            console.log(result)
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [url]);

    return { data, loading, error, fetchData };
};
