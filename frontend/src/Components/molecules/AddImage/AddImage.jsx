import PropTypes from "prop-types";
import {AddImageWrapper} from "./AddImage.styled.js";
import {IconAddImages} from "../../svgs/IconAddImages.jsx";

export const AddImage = ({onClick, disabled}) => {
    return (
        <AddImageWrapper
            onClick={onClick}
            disabled={disabled}
        >
            <IconAddImages
                color={'#F2A63B'}
            />
            <span>Agregar fotos</span>
        </AddImageWrapper>
    )
}

AddImage.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
}