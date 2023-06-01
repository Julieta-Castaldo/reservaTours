import Swal from "sweetalert";

export const usePostCategory = () => {
    const token = sessionStorage.getItem('token')
    const handlePostCategory = (category) => {
        fetch('http://localhost:8080/Categoria/agregar', {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.status === 200) {
                    Swal({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Categoría creada correctamente',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    Swal({
                        title: 'Error',
                        text: 'La categoría no pudo ser creada. Intente nuevamente más tarde.',
                        icon: 'error',
                        button: 'Aceptar',
                    });
                }
                return response.json()
            })
            .then(data => console.log(data))
            .catch(error => {
                console.log(error);
            });


    }

    return [handlePostCategory]
}