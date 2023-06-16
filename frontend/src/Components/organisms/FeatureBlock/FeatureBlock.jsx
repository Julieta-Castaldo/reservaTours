atureBlockItems, FeatureBlockTitle, FeatureBlockWrapper} from "./FeatureBlock.styled.js";
import PropTypes from "prop-types";
import {IconText} from "../../molecules/IconText/IconText.jsx";
import {IconBus} from "../../svgs/IconBus.jsx";
import {IconBreakfast} from "../../svgs/IconBreakfast.jsx";
import {IconTuristGuide} from "../../svgs/IconToristGuide.jsx";
import {IconDinner} from "../../svgs/IconDinner.jsx";

export const FeatureBlock = ({features}) => {

    return (
        <FeatureBlockWrapper>
            <FeatureBlockTitle>
                Lo que te incluye este tour
            </FeatureBlockTitle>
            <FeatureBlockItems>
                {features?.map((item, index) => {
                    if (item.includes('Desayuno')) {
                        return <IconText
                            key={index}
                            text='Desayuno'
                            color={'#717B8A'}
                            fontSize='1.6rem'
                            lineHeight='2.5rem'
                            fontWeight='300'
                            src={
                                <IconBreakfast
                                    size='22'
                                    color={'#58C1CE'}
                                />
                            }
                        />;
                    } else if (item.includes('Transporte')) {
                        return <IconText
                            key={index}
                            text='Transporte'
                            color={'#717B8A'}
                            fontSize='1.6rem'
                            lineHeight='2.5rem'
                            fontWeight='300'
                            src={
                                <IconBus
                                    size='22'
                                    color={'#58C1CE'}
                                />
                            }
                        />;
                    }
                    else if (item.includes('Almuerzo')) {
                        return <IconText
                            key={index}
                            text='Almuerzo'
                            color={'#717B8A'}
                            fontSize='1.6rem'
                            lineHeight='2.5rem'
                            fontWeight='300'
                            src={
                                <IconDinner
                                    size='22'
                                    color={'#58C1CE'}
                                />
                            }
                        />;
                    } else if (item.includes('Cena')) {
                        return <IconText
                            key={index}
                            text='Cena'
                            color={'#717B8A'}
                            fontSize='1.6rem'
                            lineHeight='2.5rem'
                            fontWeight='300'
                            src={
                                <IconDinner
                                    size='22'
                                    color={'#58C1CE'}
                                />
                            }
                        />;
                    } else if (item.includes('Guía Turístico')) {
                        return <IconText
                            key={index}
                            text='Guía turístico'
                            color={'#717B8A'}
                            fontSize='1.6rem'
                            lineHeight='2.5rem'
                            fontWeight='300'
                            src={
                                <IconTuristGuide
                                    size='22'
                                    color={'#58C1CE'}
                                />
                            }
                        />;
                    } else {
                        return null;
                    }

                })}
            </FeatureBlockItems>
        </FeatureBlockWrapper>
    )
}

FeatureBlock.propTypes = {
    features: PropTypes.string
};