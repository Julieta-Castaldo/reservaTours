import { IconArrowRight2 } from "../../svgs/IconArrowRight2.jsx";
import { ButtonIcon } from "../../molecules/ButtonIcon/ButtonIcon.jsx";
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
import PropTypes from "prop-types";

export const TourCard = (props) => {

    const {imgUrl, title, date, location, currency, price } = props;

    return (
        <TourCardWrapper>
            <TourCardImgWrapper
                imgUrl={imgUrl}
            />
            <TourCardDetails>
                <TourCardTitle>
                    {title}
                </TourCardTitle>
                <IconText
                    text={date}
                    src={
                        <IconCalendar1
                            size='16'
                            color={'#58C1CE'}
                        />
                    }
                />
                <IconText
                    text={location}
                    src={
                        <IconLocation
                            size='16'
                            color={'#58C1CE'}
                        />
                    }
                />
            </TourCardDetails>
            <TourCardPriceWrapper>
                <TourCardCurrency>{currency}</TourCardCurrency>
                <TourCardPrice>
                    ${price}
                </TourCardPrice>
            </TourCardPriceWrapper>
            <Link to='/tour/:1'>
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
        </TourCardWrapper>
    )
}

TourCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};