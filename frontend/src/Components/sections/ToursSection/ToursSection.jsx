import { TourCard } from "../../organisms/TourCard/TourCard.jsx";
import { ToursSectionCards, ToursSectionTitle, ToursSectionWrapper } from "./ToursSection.styled.js";

export const ToursSection = ({ products, title, filteredTours }) => {

    return (
        <ToursSectionWrapper>
            {!filteredTours && <ToursSectionTitle>{title}</ToursSectionTitle>}
            <div style={{ marginTop: filteredTours ? '60px' : 0 }}>
                <ToursSectionCards>
                    {products && products.map(product =>
                        <TourCard
                            product={product}
                            key={product.id}
                        />
                    )}
                    {products && products.length === 0 && <p style={{ color: '#8894A3'}}>No hay tours relacionados a tu búsqueda</p>}
                </ToursSectionCards>
            </div>
        </ToursSectionWrapper>
    )
}