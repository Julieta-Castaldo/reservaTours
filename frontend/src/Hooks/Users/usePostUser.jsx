import Swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../Context/Context";

export const usePostUser = () => {
    const navigate = useNavigate()
    const { setAuth } = useGlobalState()
    const handlePostUser = (userData, onClose) => {
        fetch('http://localhost:8080/api/sign-up', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then(response => {
                if (response.status === 200) {
                    Swal({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Creamos tu usuario. ¡Bienvenid@!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    onClose()
                    navigate('/')
                } else {
                    Swal({
                        title: 'Error',
                        text: 'El usuario no pudo ser creado. Intente nuevamente más tarde.',
                        icon: 'error',
                        button: 'Aceptar',
                    });
                }
                console.log(response)
                return response.json()
            })
            .then(data => {
                sessionStorage.setItem('token', data.response.jwt)
                setAuth(data.usuarioDTO)
            })
            .catch(error => {
                Swal({
                    title: 'Error',
                    text: 'El usuario no pudo ser creado. Intente nuevamente más tarde.',
                    icon: 'error',
                    button: 'Aceptar',
                });
            });


    }

    return [handlePostUser]
}
