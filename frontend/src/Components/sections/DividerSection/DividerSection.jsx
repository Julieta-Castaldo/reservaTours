import {DividerSectionElement, DividerSectionWrapper} from "./DividerSection.styled.js";
import PropTypes from "prop-types";

export const DividerSection = (props) => {

    const {padding} = props;

    return (
        <DividerSectionWrapper
            padding={padding}
        >
            <DividerSectionElement></DividerSectionElement>
        </DividerSectionWrapper>
    )
}

DividerSection.propTypes = {
    padding: PropTypes.string,
};