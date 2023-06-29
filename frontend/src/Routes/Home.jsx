import React, { useEffect, useState } from 'react'
import { MainSection } from "../Components/sections/MainSection/MainSection.jsx";
import { ToursSection } from "../Components/sections/ToursSection/ToursSection.jsx";
import { CategoriesSection } from "../Components/sections/CategoriesSection/CategoriesSection.jsx";
import { DividerSection } from "../Components/sections/DividerSection/DividerSection.jsx";
import { useGetTourByFilter } from '../Hooks/Tours/useGetTourByFilter.jsx';
import { useGlobalState } from '../Context/Context.jsx';
import PlaneAnimation from '../Util/images/PlaneAnimation.jsx';

const Home = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, handleGetFilteredProducts] = useGetTourByFilter()
    const [filtersApplied, setFiltersApplied] = useState({
        type: '',
        value: ''
    })
    const [filtersAppliedFlag, setFiltersAppliedFlag] = useState(false)
    const url = `http://localhost:8080/Tour/todosAleatorio`;
    const { reloadProductsFlag, setReloadProductsFlag } = useGlobalState()
    useEffect(() => {
        setFiltersAppliedFlag(false)
        setReloadProductsFlag(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReloadProductsFlag(false)
                setProducts(data)
            })
    }, [url])

    useEffect(() => {
        if (reloadProductsFlag && filtersAppliedFlag) {
            handleGetFilteredProducts(filtersApplied)
        }
    }, [reloadProductsFlag, filtersApplied, filtersAppliedFlag])

    return (
        <main>
            <MainSection products={products} setFilters={setFiltersApplied} setFiltersAppliedFlag={setFiltersAppliedFlag} />
            <>
                <DividerSection padding={'20rem 20% 5rem 20%;'} />
                <CategoriesSection />
                <DividerSection padding={'5rem 20% 5rem 20%;'} />
            </>
            {reloadProductsFlag ? <div style={{ width: '100%', height: '140px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ fontSize: '18px', color: '#595E65', marginBottom: '8px' }}>Buscando tours relacionados...</p>
                <PlaneAnimation />
            </div> :
                <ToursSection products={filtersAppliedFlag ? filteredProducts : products} title='Nuestros Productos' />
            }
        </main>
    )
}

export default Home;