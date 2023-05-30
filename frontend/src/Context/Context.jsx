import { useContext, createContext, useEffect, useState, useReducer } from "react";

export const GlobalState = createContext();

const Context = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [products, setProducts] = useState([])
    const urlProducts = `http://localhost:8080/Tour/todos`;
    
    let token = localStorage.getItem('token')
    useEffect(() => {
        const fetchUsers = async () => {
            let res = await fetch(urlProducts)
            let data = await res.json()
            setProducts(data)
        }
        fetchUsers()
    }, [])

    return (
        <GlobalState.Provider value={{ products, token, auth, setAuth }}>
            {children}
        </GlobalState.Provider>
    )

}

export default Context;

export const useGlobalState = () => useContext(GlobalState)