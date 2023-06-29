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
    const [userLocation, setUserLocation] = useState(false)
    const [searchedDate, setSearchedDate] = useState(null)
    const [loadingPlaneFlag, setLoadingPlaneFlag] = useState(false)
    let token = localStorage.getItem('token')

    const fetchProducts = async () => {
        let res = await fetch(urlProducts)
        let data = await res.json()
        setProducts(data)
        setTimeout(() => {
            setReloadProductsFlag(false)
        }, 2000);
    }

    useEffect(() => {
        if (reloadProductsFlag) fetchProducts()
    }, [reloadProductsFlag])

    useEffect(() => {
        if (reloadCategories) {
            handleGetCategories()
            setReloadCategories(false)
        }
    }, [reloadCategories])

    useEffect(() => {
        fetchProducts()
        handleGetCategories()
    }, [])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation([latitude, longitude])
                },
                (error) => {
                    console.log('Error getting location:', error);
                    setUserLocation(false)
                }
            );
        } else {
            setUserLocation(false)
        }
    }, [])

    return (
        <GlobalState.Provider value={{ products, setProducts, token, auth, setAuth, setReloadProductsFlag, reloadProductsFlag, categories, setReloadCategories, userLocation, searchedDate, setSearchedDate, loadingPlaneFlag, setLoadingPlaneFlag }}>
            {children}
        </GlobalState.Provider>
    )

}

export default Context;

export const useGlobalState = () => useContext(GlobalState)