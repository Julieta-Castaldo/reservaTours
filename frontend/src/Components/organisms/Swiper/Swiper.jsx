import {SwiperArrowButton, SwiperContainer, SwiperSection} from "./Swiper.styled";
import PropTypes from "prop-types";
import {useRef, useState} from "react";
import {IconBg} from "../../atoms/IconBg/IconBg.jsx";
import {IconArrowRight2} from "../../svgs/IconArrowRight2.jsx";

export const Swiper = (props) => {

    const {data, cards} = props;

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const containerRef = useRef(null);

    const scrollToNextCard = () => {
        const container = containerRef.current;
        if (container) {
            const nextIndex =
                currentCardIndex + 1 === data.length ? 0 : currentCardIndex + 1;
            setCurrentCardIndex(nextIndex);
            container.scrollTo({
                left: container.offsetWidth * nextIndex,
                behavior: "smooth"
            });
        }
    };

    const scrollToPreviousCard = () => {
        const container = containerRef.current;
        if (container) {
            const previousIndex =
                currentCardIndex === 0 ? data.length - 1 : currentCardIndex - 1;
            setCurrentCardIndex(previousIndex);
            container.scrollTo({
                left: container.offsetWidth * previousIndex,
                behavior: "smooth"
            });
        }
    };

    return (
        <SwiperSection style={{position: "relative"}}>
            <SwiperContainer ref={containerRef}>
                {cards}
            </SwiperContainer>
            <SwiperArrowButton
                direction="left"
                onClick={scrollToPreviousCard}
            >
                <IconBg
                    bgColor={'red'}
                    // size='4rem'
                    src={
                        <IconArrowRight2
                            size='25'
                            color='#4E73DF'
                            className='ButtonIconSVG'
                        />
                    }
                />
            </SwiperArrowButton>
            <SwiperArrowButton
                direction="right"
                onClick={scrollToNextCard}
            >
                <IconBg
                    bgColor={'red'}
                    // size='4rem'
                    src={
                        <IconArrowRight2
                            size='25'
                            color='#4E73DF'
                            className='ButtonIconSVG'
                        />
                    }
                />
            </SwiperArrowButton>
        </SwiperSection>
    );
};

Swiper.propTypes = {
    data: PropTypes.array.isRequired,
    cards: PropTypes.element.isRequired,
};
