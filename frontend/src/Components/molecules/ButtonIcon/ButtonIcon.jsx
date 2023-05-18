import PropTypes from 'prop-types';
import {ButtonIconWrapper} from "./ButtonIcon.styled.js";

export const ButtonIcon = (props) => {

    const {
        text,
        bgColor,
        src,
        rIcon = true,
        borderColor,
        color,
        hoverColor,
        hoverBgColor
    } = props;

    return (
        <ButtonIconWrapper
            bgColor={bgColor}
            borderColor={borderColor}
            color={color}
            hoverColor={hoverColor}
            hoverBgColor={hoverBgColor}
        >
            {
                !rIcon && src
            }
            {text}
            {
                rIcon && src
            }
        </ButtonIconWrapper>
    )
}

ButtonIcon.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    rIcon: PropTypes.bool,
    src: PropTypes.element,
    borderColor: PropTypes.string,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    hoverBgColor: PropTypes.string
};