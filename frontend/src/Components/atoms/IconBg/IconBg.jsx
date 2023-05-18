import PropTypes from 'prop-types';
import {IconBgWrapper} from "./IconBg.styled.js";

export const IconBg = (props) => {

    const {
        bgColor,
        src,
        hoverColor,
        hoverBgColor
    } = props;

    return (
        <IconBgWrapper
            bgColor={bgColor}
            hoverColor={hoverColor}
            hoverBgColor={hoverBgColor}
        >
            {src && src}
        </IconBgWrapper>
    )
}

IconBg.propTypes = {
    bgColor: PropTypes.string,
    src: PropTypes.element,
    hoverColor: PropTypes.string,
    hoverBgColor: PropTypes.string
};