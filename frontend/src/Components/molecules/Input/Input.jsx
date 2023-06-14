import {InputLabel, InputTag, InputWrapper} from "./Input.styled.js";
import PropTypes from "prop-types";

export const Input = ({label, value, onChange, type, placeholder, disabled}) => {
    return (
        <InputWrapper>
            <InputLabel>{label}</InputLabel>
            <InputTag type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}/>
        </InputWrapper>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool
}