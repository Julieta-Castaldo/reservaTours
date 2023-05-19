import {IconTextTitle, IconTextWrapper} from "./IconText.styled.js";
import PropTypes from "prop-types";

export const IconText = (props) => {

    const {
        text,
        src,
        rIcon,
        color,
        fontWeight,
        fontStyle,
        lineHeight,
        fontSize
    } = props;

    return (
        <IconTextWrapper>
            {
                !rIcon && src
            }
            <IconTextTitle
                color={color}
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                fontSize={fontSize}
                lineHeight={lineHeight}
            >
                {text}
            </IconTextTitle>
            {
                rIcon && src
            }
        </IconTextWrapper>
    )
}

IconText.propTypes = {
    text: PropTypes.string.isRequired,
    src: PropTypes.element,
    rIcon: PropTypes.bool,
    color: PropTypes.string,
    fontStyle: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.string,
    lineHeight: PropTypes.string,
};