import { useCallback, useState } from 'react';

export const useGetUsers = () => {
    const [users, setUsers] = useState([]);
    const url = 'http://localhost:8080/User/api/users?page=1&size=150'
    const token = sessionStorage.getItem('token')
    const handleGetUsers = useCallback((setReloadUsers) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data.content)
                setReloadUsers(false)
            })
    }, []);

    return [users, handleGetUsers];
};