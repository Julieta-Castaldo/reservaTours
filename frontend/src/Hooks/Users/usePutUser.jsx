import Swal from "sweetalert";

export const usePutUser = () => {
    const token = localStorage.getItem('token')
    const handlePutUser = (data) => {
        fetch(`http://ec2-18-191-138-20.us-east-2.compute.amazonaws.com/User/updateUser`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.status === 200) {
                    Swal({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Tu perfil fue actualizado correctamente',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    Swal({
                        title: 'Error',
                        text: 'Tu perfil no pudo ser actualizado. Intente nuevamente más tarde.',
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
                    text: 'Tu perfil no pudo ser actualizado. Intente nuevamente más tarde.',
                    icon: 'error',
                    button: 'Aceptar',
                });
            });


    }

    return [handlePutUser]
}