import {
    PicturesSectionMainImg,
    PicturesSectionSubImg,
    PicturesSectionSubWrapper,
    PicturesSectionWrapper
} from "./PicturesSection.styled.js";
import PropTypes from "prop-types";

export const PicturesSection = ({mainImg, imgList}) => {
    return (
        <PicturesSectionWrapper>
            <PicturesSectionMainImg src={mainImg} alt=""/>
            <PicturesSectionSubWrapper>
                {
                    imgList && imgList.length !== 1 && imgList.map((item, idx) => {
                        if (idx !== 0) {
                            return (
                                <PicturesSectionSubImg className='secondaryImages' key={idx} src={`${item.url}`}/>
                            )
                        }
                    })
                }
            </PicturesSectionSubWrapper>
        </PicturesSectionWrapper>
    )
}

PicturesSection.propTypes = {
    mainImg: PropTypes.string,
    imgList: PropTypes.arrayOf(PropTypes.string)
};