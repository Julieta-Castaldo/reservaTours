import { useCallback, useState } from 'react';

export const useGetCities = () => {
    const [cities, setCities] = useState([]);
    const url = 'http://localhost:8080/Ciudades/todos'
    
    const handleGetCities = useCallback((setReloadCities) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                setCities(data)
                setCategories && setReloadCities(false)
            })
    }, []);

    return [cities, handleGetCities];
};