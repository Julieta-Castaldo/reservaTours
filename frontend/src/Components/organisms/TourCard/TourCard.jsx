import {IconArrowRight2} from "../../svgs/IconArrowRight2.jsx";
import {ButtonIcon} from "../../molecules/ButtonIcon/ButtonIcon.jsx";
import {
    TourCardCurrency, TourCardDetails,
    TourCardImgWrapper,
    TourCardPrice,
    TourCardPriceWrapper, TourCardTitle,
    TourCardWrapper
} from "./TourCard.styled.js";
import {IconText} from "../../molecules/IconText/IconText.jsx";
import {IconCalendar1} from "../../svgs/IconCalendar1.jsx";
import {IconLocation} from "../../svgs/IconLocation.jsx";

export const TourCard = () => {
    return (
        <TourCardWrapper>
            <TourCardImgWrapper
                imgUrl='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8e/0a/63/colombia-and-experience.jpg?w=600&h=400&s=1'
            />
            <TourCardDetails>
                <TourCardTitle>
                    Recorrido Guatape
                </TourCardTitle>
                <IconText
                    text='Agosto 24 2023'
                    src={
                        <IconCalendar1
                            size='16'
                            color={'#58C1CE'}
                        />
                    }
                />
                <IconText
                    text='Medellín, Colombia'
                    src={
                        <IconLocation
                            size='16'
                            color={'#58C1CE'}
                        />
                    }
                />
            </TourCardDetails>
            <TourCardPriceWrapper>
                <TourCardCurrency>USD</TourCardCurrency>
                <TourCardPrice>
                    $1000
                </TourCardPrice>
            </TourCardPriceWrapper>
            <ButtonIcon
                text='Detalle'
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
        </TourCardWrapper>
    )
}