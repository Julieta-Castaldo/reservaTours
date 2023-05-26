import React, { useEffect, useState } from 'react'
import {MainSection} from "../Components/sections/MainSection/MainSection.jsx";
import {ToursSection} from "../Components/sections/ToursSection/ToursSection.jsx";
import {CategoriesSection} from "../Components/sections/CategoriesSection/CategoriesSection.jsx";
import {DividerSection} from "../Components/sections/DividerSection/DividerSection.jsx";

const Home = () => {
    const [products, setProducts] = useState([])
    const url = `http://localhost:8080/Tour/todosAleatorio`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [url])

    return (
        <main>
            <MainSection/>
            <DividerSection padding={'20rem 20% 5rem 20%;'}/>
            <CategoriesSection/>
            <DividerSection padding={'5rem 20% 5rem 20%;'}/>
            <ToursSection products={products} title='Nuestros Productos'/>
        </main>
    )
}

export default Home;