import { useCallback, useState } from 'react';

export const useGetCategories = () => {
    const [categories, setCategories] = useState([]);
    const url = 'http://localhost:8080/Categoria/todos'
    
    const handleGetCategories = useCallback(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, []);

    return [categories, handleGetCategories];
};