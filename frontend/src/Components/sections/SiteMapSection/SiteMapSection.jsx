import {SiteMapSectionWrapper} from "./SiteMapSection.styled.js";
import PropTypes from "prop-types";

export const SiteMapSection = ({children}) => {
    return (
        <SiteMapSectionWrapper>
            {children}
        </SiteMapSectionWrapper>
    )
}

SiteMapSection.propTypes = {
    children: PropTypes.node.isRequired
}