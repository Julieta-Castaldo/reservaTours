import PropTypes from "prop-types";
import {SelectLabel, SelectTag, SelectWrapper} from "./Select.styled.js";

export const Select = ({label, onChange, value, children, htmlFor, selectText}) => {
    return (
        <SelectWrapper>
            <SelectLabel htmlFor={htmlFor}>{label}</SelectLabel>
            <SelectTag
                id={htmlFor}
                value={value}
                onChange={onChange}
            >
                <option value="">{selectText}</option>
                {children}
            </SelectTag>
        </SelectWrapper>
    )
}

Select.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    selectText: PropTypes.string.isRequired
}