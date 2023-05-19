import {SwiperWrapper, ToursSectionTitle, ToursSectionWrapper} from "./ToursSection.styled.js";
import {SwiperTours} from "../../organisms/SwiperTours/SwiperTours.jsx";
import {toursData} from "../../../data/tours.data.js";
import {IconArrowRight2} from "../../svgs/IconArrowRight2.jsx";
import {ButtonIcon} from "../../molecules/ButtonIcon/ButtonIcon.jsx";
import {Swiper} from "../../organisms/Swiper/Swiper.jsx";
import {SwiperCardContainer} from "../../organisms/Swiper/Swiper.styled.js";
import {TourCard} from "../../organisms/TourCard/TourCard.jsx";


export const ToursSection = () => {
    return (
        <ToursSectionWrapper>
            <ToursSectionTitle>Nuestros Tours</ToursSectionTitle>
            <SwiperWrapper>
                {/*<Swiper*/}
                {/*    data={toursData}*/}
                {/*    cards={<SwiperTours/>}*/}
                {/*/>*/}
                {
                    toursData?.map((s) => (
                            <TourCard
                                key={s.id}
                                imgUrl={s.imgUrl}
                                title={s.title}
                                date={s.date}
                                location={s.location}
                                currency={s.currency}
                                price={s.price.toString()}
                            />
                        )
                    )
                }
            </SwiperWrapper>
            <ButtonIcon
                text='Ver todos'
                width='max-content'
                src={
                    <IconArrowRight2
                        size='18'
                        className='iconSVG'
                    />
                }
                borderColor={'#05848A'}
                color={'white'}
                hoverColor={'#05848A'}
                bgColor={'#05848A'}
                hoverBgColor={'transparent'}
            />
        </ToursSectionWrapper>
    )
}