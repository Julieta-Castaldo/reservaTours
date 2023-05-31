import PropTypes from "prop-types";
import {DeleteHandleWrapper} from "./DeleteHandle.styled.js"
import {IconTrash} from "../Components/svgs/IconTrash.jsx";

const DeleteHandle = ({tourId}) => {
    const token = sessionStorage.getItem('token')

    const handleDelete = () => {
        fetch(`http://localhost:8080/Tour/${tourId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                if (response.ok) {
                    window.alert('El tour fue eliminado correctamente');
                } else {
                    window.alert('Error al eliminar el tour');
                }
            })
            .catch(error => {
                window.alert('Error al realizar la solicitud DELETE');
            });
    };

    const openConfirmation = () => {
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar el tour?');

        if (confirmDelete) {
            handleDelete();
        }
    };

    return (
        <DeleteHandleWrapper onClick={openConfirmation}>
            {/*<button onClick={openConfirmation}>Eliminar Tour</button>*/}
            <IconTrash
                color={"#E72328"}
            />
        </DeleteHandleWrapper>
    );
};

export default DeleteHandle;

DeleteHandle.propTypes = {
    tourId: PropTypes.array,
};