import { useState } from "react"
import { useGlobalState } from "../../Context/Context";


export const useGetTourByFilter = () => {
    const [filteredProducts, setProducts] = useState()
    let urlProducts = `http://localhost:8080/Tour/todos`;
    const { setReloadProductsFlag } = useGlobalState()

    const handleGetFilteredProducts = (filter) => {
        switch (filter.type) {
            case 'ciudad':
                urlProducts = `http://localhost:8080/Tour/porCiudad/${filter.value}`
                break;
            case 'categoria':
                urlProducts = `http://localhost:8080/Tour/porCategoria/${filter.value}`
                break;
            case 'fecha':
                urlProducts = `http://localhost:8080/Tour/fechas-disponibles?fecha=${filter.value}`
                break
            default:
                break;
        }
        console.log(filter)
        fetch(urlProducts, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setReloadProductsFlag(false)
            })
    }

    return [filteredProducts, handleGetFilteredProducts]
}