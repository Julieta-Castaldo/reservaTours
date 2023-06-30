import Swal from "sweetalert";

export const useDeleteCategory = () => {
    const handleDeleteCategory = (id, setReloadCategories) => {
        const token = localStorage.getItem('token')
        fetch(`http://ec2-18-191-138-20.us-east-2.compute.amazonaws.com/Categoria/${id}`, {
            method: 'DELETE',
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
                        title: 'Categoría eliminada correctamente',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    setReloadCategories(true)
                } else {
                    Swal({
                        title: 'Error',
                        text: response.status === 400 ? 'La categoría no pudo ser eliminada por encontrarse en uso. Deberás cambiar la categoría de los tours que la estén usando para poder eliminarla' : 'La categoría no pudo ser eliminada. Intente nuevamente más tarde.',
                        icon: 'error',
                        button: 'Aceptar',
                    });
                }
                return response.json()
            })


    }

    return [handleDeleteCategory]
}