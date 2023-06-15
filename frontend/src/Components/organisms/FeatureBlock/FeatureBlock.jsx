import {FeatureBlockItems, FeatureBlockTitle, FeatureBlockWrapper} from "./FeatureBlock.styled.js";
import PropTypes from "prop-types";
import {IconText} from "../../molecules/IconText/IconText.jsx";
import {IconBus} from "../../svgs/IconBus.jsx";
import {IconBed} from "../../svgs/IconBed.jsx";
import {IconBreakfast} from "../../svgs/IconBreakfast.jsx";
import {IconWay} from "../../svgs/IconWay.jsx";
import {IconTuristGuide} from "../../svgs/IconToristGuide.jsx";
import {IconDinner} from "../../svgs/IconDinner.jsx";

const features = {
    desayuno: "si",
    transporte: "si",
    guiaTuristico: "si",
    almuerzo: "si",
    cena: "si",
    recorrido: "si"
}

export const FeatureBlock = (
    // {features}
) => {

    const {
        desayuno = "si",
        transporte = "si",
        guiaTuristico = "si",
        almuerzo = "si",
        cena = "si",
        recorrido = "si"
    } = features;

    return (
        <FeatureBlockWrapper>
            <FeatureBlockTitle>
                Lo que te incluye este tour
            </FeatureBlockTitle>
            <FeatureBlockItems>
                {
                    desayuno === "si" && (
                        <IconText
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
                        />
                    )
                }
                {
                    transporte === "si" && (
                        <IconText
                            text='Hospedaje'
                            color={'#717B8A'}
                            fontSize='1.6rem'
                            lineHeight='2.5rem'
                            fontWeight='300'
                            src={
                                <IconBed
                                    size='22'
                                    color={'#58C1CE'}
                                />
                            }
                        />
                    )
                }
                {
                    almuerzo === "si" && (
                        <IconText
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
                        />
                    )

                }
                {
                    recorrido === "si" && (
                        <IconText
                            text='Recorrido'
                            color={'#717B8A'}
                            fontSize='1.6rem'
                            lineHeight='2.5rem'
                            fontWeight='300'
                            src={
                                <IconWay
                                    size='22'
                                    color={'#58C1CE'}
                                />
                            }
                        />

                    )
                }
                {
                    cena === "si" && (
                        <IconText
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
                        />

                    )
                }
                {
                    guiaTuristico === "si" && (
                        <IconText
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
                        />

                    )
                }
            </FeatureBlockItems>
        </FeatureBlockWrapper>
    )
}

FeatureBlock.propTypes = {
    features: PropTypes.string,
};