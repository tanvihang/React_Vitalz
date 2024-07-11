// hooks/useFetchUserData.js
import { useEffect, useState } from 'react';

export default function useFetchUserData(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            try {
                // const response = await fetch("https://exam-vitalz-backend-8267f8929b82.herokuapp.com/api/getUserList");
                const response = await fetch("/assets/sampleData/userList.json");
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                console.log(result)
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    return { data, loading, error };
};
