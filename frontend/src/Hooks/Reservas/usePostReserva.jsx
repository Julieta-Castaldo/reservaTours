import Swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../Context/Context";

export const usePostReserva = () => {

    const handlePostReserva = (data) => {
        fetch('http://localhost:8080/Reserva/crear', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then(response => {
                if (response.status === 200) {
                    Swal({
                        position: 'top-end',
                        icon: 'success',
                        title: '¡Tu reserva fue realizada!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    Swal({
                        title: 'Error',
                        text: 'No pudimos registrar la reserva. Intente nuevamente más tarde.',
                        icon: 'error',
                        button: 'Aceptar',
                    });
                }
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                Swal({
                    title: 'Error',
                    text: 'No pudimos registrar la reserva. Intente nuevamente más tarde.',
                    icon: 'error',
                    button: 'Aceptar',
                });
            });
    }

    return [handlePostReserva]
}