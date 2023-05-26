import {TourCard} from "../../organisms/TourCard/TourCard.jsx";
import {ToursSectionCards, ToursSectionTitle, ToursSectionWrapper} from "./ToursSection.styled.js";

export const ToursSection = ({ products, title }) => {

    return (
        <ToursSectionWrapper>
            <ToursSectionTitle>{title}</ToursSectionTitle>
            <ToursSectionCards>
                {products && products.map(product =>
                    <TourCard
                        product={product}
                        key={product.id}
                    />
                )}
            </ToursSectionCards>
        </ToursSectionWrapper>
    )
}