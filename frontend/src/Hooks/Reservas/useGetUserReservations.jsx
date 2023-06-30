import { useCallback, useState } from 'react';

export const useGetUserReservations = () => {
    const [reservations, setReservations] = useState([]);
    
    const handleGetReservations = useCallback((id) => {
        const token = localStorage.getItem('token')
        const url = `http://ec2-18-191-138-20.us-east-2.compute.amazonaws.com/Reserva/porUsuario/${id}`
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(res => res.json()
            )
            .then(data => {
                setReservations(data)
            })
    }, []);

    return [reservations, handleGetReservations];
};