import React, { useState, useEffect } from 'react';
import {
    CategoriesSectionCards,
    CategoriesSectionWrapper
} from "./Categories.styled.js";
import {CategoryCard} from "../../organisms/CategoryCard/CategoryCard.jsx";
import { IconLocation } from '../../svgs/IconLocation.jsx';

export const CategoriesSection = ({ filter }) => {
    const [categories, setCategories] = useState([])
    const url = `http://localhost:8080/Categoria/todos`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [url])

    return (
        <CategoriesSectionWrapper>
            <CategoriesSectionCards>
                {
                    categories && categories.map((category) => {
                        return (
                            <CategoryCard
                                key={category.id}
                                id={category.id}
                                title={category.nombreCategoria}
                                icon={
                                    <IconLocation
                                        color={'#FACA0A'}
                                        size={'68'}
                                    />
                                }
                            />
                        )
                    })
                }
            </CategoriesSectionCards>
        </CategoriesSectionWrapper>
    )
}