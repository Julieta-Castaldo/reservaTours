import Swal from "sweetalert";

export const usePutUserRol = () => {
    const token = localStorage.getItem('token')
    const handlePutUserRol = (id, setReloadUsers) => {
        fetch(`http://localhost:8080/User/${id}/rol`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setReloadUsers(true)
                    Swal({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Rol de usuario actualizado',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    Swal({
                        title: 'Error',
                        text: 'El usuario no pudo ser actualizado. Intente nuevamente más tarde.',
                        icon: 'error',
                        button: 'Aceptar',
                    });
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                Swal({
                    title: 'Error',
                    text: 'El usuario no pudo ser actualizado. Intente nuevamente más tarde.',
                    icon: 'error',
                    button: 'Aceptar',
                });
            });


    }

    return [handlePutUserRol]
}