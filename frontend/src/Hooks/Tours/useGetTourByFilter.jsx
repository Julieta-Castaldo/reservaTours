import { useState } from "react"
import { useGlobalState } from "../../Context/Context";


export const useGetTourByFilter = () => {
    const [filteredProducts, setProducts] = useState()
    let urlProducts = `http://localhost:8080/Tour/todos`;
    const { setReloadProductsFlag } = useGlobalState()

    const handleGetFilteredProducts = (filter) => {
        let urlProducts = `http://localhost:8080/Tour/buscador?ciudadId=${filter.ciudad}&categoriaId=${filter.categoria}&fechaDisponible=${filter.fecha}`
        fetch(urlProducts, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setProducts(data)
                setReloadProductsFlag(false)
            })
    }

    return [filteredProducts, handleGetFilteredProducts]
}