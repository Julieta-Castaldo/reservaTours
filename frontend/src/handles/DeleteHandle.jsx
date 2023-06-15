import PropTypes from "prop-types";
import { DeleteHandleWrapper } from "./DeleteHandle.styled.js"
import { IconTrash } from "../Components/svgs/IconTrash.jsx";
import Swal from 'sweetalert';
import { useGlobalState } from "../Context/Context.jsx";

const DeleteHandle = ({ tourId }) => {
    const token = localStorage.getItem('token')
    const {setReloadProductsFlag} = useGlobalState()
    const {setProducts} = useGlobalState()

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
                    Swal({
                        position: 'top-end',
                        icon: 'success',
                        title: 'El tour ha sido eliminado correctamente',
                        timer: 2000
                    });
                    setReloadProductsFlag(true)
                    setProducts([])
                } else {
                    Swal({
                        title: 'Error',
                        text: 'El tour no pudo ser eliminado, intente más tarde.',
                        icon: 'error',
                        button: 'Aceptar',
                    });
                }
            })
            .catch(error => {
                Swal({
                    title: 'Error',
                    text: 'El tour no pudo ser eliminado, intente más tarde.',
                    icon: 'error',
                    button: 'Aceptar',
                });
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