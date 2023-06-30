import { useCallback, useState } from 'react';

export const useGetCities = () => {
    const [cities, setCities] = useState([]);
    const url = 'http://ec2-18-191-138-20.us-east-2.compute.amazonaws.com/Ciudades/todos'
    
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
                setReloadCities && setReloadCities(false)
            })
    }, []);

    return [cities, handleGetCities];
};