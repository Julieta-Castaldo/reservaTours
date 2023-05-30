import PropTypes from "prop-types";
import {DeleteHandleWrapper} from "./DeleteHandle.styled.js"
import {IconTrash} from "../Components/svgs/IconTrash.jsx";

const DeleteHandle = ({tourId}) => {
    // const tourId = 3; // ID del tour que deseas eliminar

    const token = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4NTQxMzE3NywiZXhwIjoxNjg1NDE0Mzc3fQ.qGryAbEgUw_F8c-JPoRRrPuNqclWVwvthzHiYH8AMgo`;

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
                    console.log('El tour fue eliminado correctamente');
                    window.alert('El tour fue eliminado correctamente');
                    console.log(response);
                } else {
                    console.error('Error al eliminar el tour');
                    window.alert('Error al eliminar el tour');
                    console.log(response);
                }
            })
            .catch(error => {
                console.error('Error al realizar la solicitud DELETE', error);
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