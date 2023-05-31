import { useContext, createContext, useEffect, useState, useReducer } from "react";

export const GlobalState = createContext();

const Context = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [reloadProductsFlag, setReloadProductsFlag] = useState(false)
    const [products, setProducts] = useState([])
    const urlProducts = `http://localhost:8080/Tour/todos`;

    let token = sessionStorage.getItem('token')

    const fetchProducts = async () => {
        let res = await fetch(urlProducts)
        let data = await res.json()
        setProducts(data)
        setReloadProductsFlag(false)
    }

    useEffect(() => {
        if (reloadProductsFlag) fetchProducts()
    }, [reloadProductsFlag])

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <GlobalState.Provider value={{ products, setProducts, token, auth, setAuth, setReloadProductsFlag, reloadProductsFlag }}>
            {children}
        </GlobalState.Provider>
    )

}

export default Context;

export const useGlobalState = () => useContext(GlobalState)