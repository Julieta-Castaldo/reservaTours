import {toursData} from "../../../data/tours.data.js";
import {SwiperCardContainer} from "../Swiper/Swiper.styled.js";
import {TourCard} from "../TourCard/TourCard.jsx";

export const SwiperTours = () => {
    return (
        <>
            {
                toursData?.map((s) => (
                    <SwiperCardContainer key={s.id}>
                        <TourCard
                            imgUrl={s.imgUrl}
                            title={s.title}
                            date={s.date}
                            location={s.location}
                            currency={s.currency}
                            price={s.price.toString()}
                        />
                        )
                    </SwiperCardContainer>
                ))
            }
        </>
    )
}