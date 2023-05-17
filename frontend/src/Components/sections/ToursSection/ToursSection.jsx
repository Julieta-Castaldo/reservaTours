import {TourCard} from "../../organisms/TourCard/TourCard.jsx";
import {ToursSectionTitle, ToursSectionWrapper} from "./ToursSection.styled.js";

export const ToursSection = () => {
    return (
        <ToursSectionWrapper>
            <ToursSectionTitle>Nuestros Tours</ToursSectionTitle>
            <TourCard/>
        </ToursSectionWrapper>
    )
}