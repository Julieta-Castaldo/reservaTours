import {
    CategoriesSectionCards,
    CategoriesSectionTitle,
    CategoriesSectionWrapper
} from "./Categories.styled.js";
import {categoriesData} from "../../../data/categories.data.js";
import {CategoryCard} from "../../organisms/CategoryCard/CategoryCard.jsx";

export const CategoriesSection = () => {
    return (
        <CategoriesSectionWrapper>
            <CategoriesSectionTitle>Categorias</CategoriesSectionTitle>
            <CategoriesSectionCards>
                {
                    categoriesData.map((category) => {
                        return (
                            <CategoryCard
                                key={category.id}
                                url={category.url}
                                title={category.title}
                                icon={
                                    <category.icon
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