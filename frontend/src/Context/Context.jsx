import { useContext, createContext, useEffect, useState, useReducer } from "react";

export const GlobalState = createContext();

const Context = ({ children }) => {

    const [products, setProducts] = useState([])
    const urlProducts = `http://localhost:8080/Tour/todos`;

    useEffect(() => {
        const fetchUsers = async () => {
            let res = await fetch(urlProducts)
            let data = await res.json()
            setProducts(data)
        }
        fetchUsers()
    }, [])

    return (
        <GlobalState.Provider value={{ products }}>
            {children}
        </GlobalState.Provider>
    )

}

export default Context;

export const useGlobalState = () => useContext(GlobalState)