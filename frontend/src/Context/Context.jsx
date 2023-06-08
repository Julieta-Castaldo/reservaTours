import { useContext, createContext, useEffect, useState } from "react";
import { useGetCategories } from "../Hooks/Categories/useGetCategories";

export const GlobalState = createContext();

const Context = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [reloadProductsFlag, setReloadProductsFlag] = useState(false)
    const [products, setProducts] = useState([])
    const [categories, handleGetCategories] = useGetCategories();
    const [reloadCategories, setReloadCategories] = useState(false)
    const urlProducts = `http://localhost:8080/Tour/todos`;

    let token = localStorage.getItem('token')

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
        if(reloadCategories) handleGetCategories()
    }, [reloadCategories])

    useEffect(() => {
        fetchProducts()
        handleGetCategories()
    }, [])

    return (
        <GlobalState.Provider value={{ products, setProducts, token, auth, setAuth, setReloadProductsFlag, reloadProductsFlag, categories, setReloadCategories }}>
            {children}
        </GlobalState.Provider>
    )

}

export default Context;

export const useGlobalState = () => useContext(GlobalState)