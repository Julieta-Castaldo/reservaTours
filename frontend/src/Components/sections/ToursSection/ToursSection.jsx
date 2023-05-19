import React, { useEffect, useState } from "react";
import { TourCard } from "../../organisms/TourCard/TourCard.jsx";
import { ToursSectionTitle, ToursSectionWrapper } from "./ToursSection.styled.js";

export const ToursSection = () => {
    const [products, setProducts] = useState([])
    const url = `http://localhost:8080/Tour/todos`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [url])

    return (
        <ToursSectionWrapper>
            <ToursSectionTitle>Nuestros Tours</ToursSectionTitle>
            {products && products.map(product => <TourCard product={product} key={product.id}/>)}
        </ToursSectionWrapper>
    )
}