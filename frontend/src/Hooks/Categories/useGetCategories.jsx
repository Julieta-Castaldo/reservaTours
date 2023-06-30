import { useCallback, useState } from 'react';

export const useGetCategories = () => {
    const [categories, setCategories] = useState([]);
    const url = 'http://ec2-18-191-138-20.us-east-2.compute.amazonaws.com/Categoria/todos'
    
    const handleGetCategories = useCallback((setReloadCategories) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setReloadCategories(false)
            })
    }, []);

    return [categories, handleGetCategories];
};