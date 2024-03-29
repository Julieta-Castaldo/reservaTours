import { useCallback, useState } from 'react';

export const useGetUsers = () => {
    const [users, setUsers] = useState([]);
    const url = 'http://ec2-18-191-138-20.us-east-2.compute.amazonaws.com/User/api/users?page=1&size=150'
    const token = localStorage.getItem('token')
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
                setReloadUsers && setReloadUsers(false)
            })
    }, []);

    return [users, handleGetUsers];
};