import {IconTextTitle, IconTextWrapper} from "./IconText.styled.js";
import PropTypes from "prop-types";

export const IconText = (props) => {

    const {text, src, rIcon} = props;

    return (
        <IconTextWrapper>
            {
                !rIcon && src
            }
            <IconTextTitle>
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
};