import React, { useEffect, useState } from 'react'
import { MainSection } from "../Components/sections/MainSection/MainSection.jsx";
import { ToursSection } from "../Components/sections/ToursSection/ToursSection.jsx";
import { CategoriesSection } from "../Components/sections/CategoriesSection/CategoriesSection.jsx";
import { DividerSection } from "../Components/sections/DividerSection/DividerSection.jsx";
import { FeatureBlock } from "../Components/organisms/FeatureBlock/FeatureBlock.jsx";
import { useGetTourByFilter } from '../Hooks/Tours/useGetTourByFilter.jsx';

const Home = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, handleGetFilteredProducts] = useGetTourByFilter()
    const [filtersApplied, setFiltersApplied] = useState({
        type: '',
        value: ''
    })
    const url = `http://localhost:8080/Tour/todosAleatorio`;
    const [reloadProducts, setReloadProducts] = useState(false)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [url])

    useEffect(() => {
        if(reloadProducts && filtersApplied.value !== ''){
            handleGetFilteredProducts(filtersApplied)
            setReloadProducts(false)
        }
    }, [reloadProducts, filtersApplied])

    return (
        <main>
            <MainSection products={products} setFilters={setFiltersApplied} setReloadProducts={setReloadProducts} />
            <>
                <DividerSection padding={'20rem 20% 5rem 20%;'} />
                <CategoriesSection />
                <DividerSection padding={'5rem 20% 5rem 20%;'} />
            </>

            <ToursSection products={filtersApplied.value === '' ? products : filteredProducts} title='Nuestros Productos' filteredTours={filtersApplied.type !== ''} />
        </main>
    )
}

export default Home;