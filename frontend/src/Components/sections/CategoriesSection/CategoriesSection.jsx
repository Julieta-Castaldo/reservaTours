import React, { useState, useEffect, useRef } from 'react';
import {
    CategoriesSectionCards,
    CategoriesSectionWrapper
} from "./Categories.styled.js";
import { CategoryCard } from "../../organisms/CategoryCard/CategoryCard.jsx";
import { IconLocation } from '../../svgs/IconLocation.jsx';
import { CircleButton } from '../../molecules/CircleButton/CircleButton.jsx';
import { IconArrowRight2 } from '../../svgs/IconArrowRight2.jsx';

export const CategoriesSection = ({ filter }) => {
    const [categories, setCategories] = useState([])
    const url = `http://localhost:8080/Categoria/todos`;
    const [inicio, setInicio] = useState(0)
    const [final, setFinal] = useState(3)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [url])

    useEffect(() => {
        const handleResize = () => {
            const size = window.innerWidth;
            if(size < 1100 && size > 700){
               setInicio(0)
               setFinal(1)
            } else if(size < 700){
                setInicio(0)
                setFinal(0)
            } else {
                setInicio(0)
                setFinal(3)
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <CategoriesSectionWrapper>
            <CategoriesSectionCards>
                <CircleButton
                    onClick={() => {
                        if (inicio !== 0) {
                            let value = inicio - 1
                            setInicio(value)
                            setFinal(final - 1)
                        }
                    }}
                    src={
                        <IconArrowRight2
                            size='18'
                            className='iconSVG'
                        />
                    }
                    borderColor={'#05848A'}
                    color={'white'}
                    hoverColor={'white'}
                    bgColor={'#58C1CE'}
                    hoverBgColor={'#A0D7DE'}
                    width={'30px'}
                    height={'30px'}
                    margin={'0 16px 0 0'}
                    disabled={inicio === 0}
                />
                {
                    categories && categories.map((category, idx) => {
                        if (idx >= inicio && idx <= final) {
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
                        }
                    })
                }
                <CircleButton
                    onClick={() => {
                        if (categories && (categories.length - 1) !== final) {
                            let value = final + 1
                            setFinal(value)
                            setInicio(inicio + 1)
                        }
                    }}
                    src={
                        <IconArrowRight2
                            size='18'
                            className='iconSVG'
                        />
                    }
                    borderColor={'#05848A'}
                    color={'white'}
                    hoverColor={'white'}
                    bgColor={'#58C1CE'}
                    hoverBgColor={'#A0D7DE'}
                    width={'30px'}
                    height={'30px'}
                    margin={'0 16px 0 0'}
                    disabled={final === (categories.length - 1) }
                />
            </CategoriesSectionCards>
        </CategoriesSectionWrapper>
    )
}