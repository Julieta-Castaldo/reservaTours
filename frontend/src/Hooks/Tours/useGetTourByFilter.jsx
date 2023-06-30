import { useState } from "react"
import { useGlobalState } from "../../Context/Context";


export const useGetTourByFilter = () => {
    const [filteredProducts, setProducts] = useState()
    let urlProducts = `http://ec2-18-191-138-20.us-east-2.compute.amazonaws.com/Tour/todos`;
    const { setReloadProductsFlag } = useGlobalState()

    const handleGetFilteredProducts = (filter) => {
        let urlProducts = `http://ec2-18-191-138-20.us-east-2.compute.amazonaws.com/Tour/buscador?ciudadId=${filter.ciudad}&categoriaId=${filter.categoria}&fechaDisponible=${filter.fecha}`
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