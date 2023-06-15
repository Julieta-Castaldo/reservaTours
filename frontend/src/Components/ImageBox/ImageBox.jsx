import {ImageBoxDeleteAction, ImageBoxWrapper} from "./ImageBox.styled.js";
import PropTypes from "prop-types";

export const ImageBox = ({src}) => {
    return (
        <ImageBoxWrapper
            image={src}
        >
            <ImageBoxDeleteAction>

            </ImageBoxDeleteAction>
        </ImageBoxWrapper>
    )
}

ImageBox.propTypes = {
    src: PropTypes.string.isRequired,
}