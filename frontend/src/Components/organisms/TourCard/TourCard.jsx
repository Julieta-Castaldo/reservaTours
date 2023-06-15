import { IconArrowRight2 } from "../../svgs/IconArrowRight2.jsx";
import { ButtonIcon } from "../../molecules/ButtonIcon/ButtonIcon.jsx";
import {
    TourCardCurrency, TourCardDetails,
    TourCardImgWrapper,
    TourCardPrice,
    TourCardPriceWrapper, TourCardTitle,
    TourCardWrapper
} from "./TourCard.styled.js";
import { IconText } from "../../molecules/IconText/IconText.jsx";
import { IconCalendar1 } from "../../svgs/IconCalendar1.jsx";
import { IconLocation } from "../../svgs/IconLocation.jsx";
import { Link } from "react-router-dom";

export const TourCard = ({product}) => {
    const { listaImagenes, nombre, duracion, ciudad, id } = product
    console.log(product)
    return (
        <TourCardWrapper>
            <TourCardImgWrapper
                imgUrl={listaImagenes && listaImagenes[0] ? listaImagenes[0].url :'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8e/0a/63/colombia-and-experience.jpg?w=600&h=400&s=1'}
            />
            <TourCardDetails>
                <TourCardTitle>
                    {nombre}
                </TourCardTitle>
                <IconText
                    text={`${duracion} días`}
                    src={
                        <IconCalendar1
                            size='16'
                            color={'#58C1CE'}
                        />
                    }
                />
                <IconText
                    text={ciudad && ciudad.nombreCiudad ? ciudad.nombreCiudad : ''}
                    src={
                        <IconLocation
                            size='16'
                            color={'#58C1CE'}
                        />
                    }
                />

                <TourCardPriceWrapper>
                <TourCardCurrency>USD</TourCardCurrency>
                <TourCardPrice>
                    ${Number(id)*1000}
                </TourCardPrice>
            </TourCardPriceWrapper>
            <Link to={`/tour/:${id}`}>
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
            </Link>
            </TourCardDetails>
           
        </TourCardWrapper>
    )
}