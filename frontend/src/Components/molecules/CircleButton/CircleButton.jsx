import PropTypes from 'prop-types';
import {CircleButtonWrapper} from "./CircleButton.styled.js";

export const CircleButton = (props) => {

    const {
        bgColor,
        src,
        borderColor,
        color,
        hoverColor,
        hoverBgColor,
        width,
        margin,
        height
    } = props;

    return (
        <CircleButtonWrapper
            bgColor={bgColor}
            borderColor={borderColor}
            color={color}
            hoverColor={hoverColor}
            hoverBgColor={hoverBgColor}
            width={width}
            margin={margin}
            height={height}
        >
            {
                src
            }
        </CircleButtonWrapper>
    )
}

CircleButton.propTypes = {
    bgColor: PropTypes.string,
    src: PropTypes.element,
    borderColor: PropTypes.string,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    hoverBgColor: PropTypes.string,
    width: PropTypes.string,
    margin: PropTypes.string,
    height: PropTypes.string
};