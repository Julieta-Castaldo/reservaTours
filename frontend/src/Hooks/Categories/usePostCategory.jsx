import Swal from "sweetalert";
import { useGlobalState } from "../../Context/Context";

export const usePostCategory = () => {
    const token = localStorage.getItem('token')
    const { setReloadCategories } = useGlobalState()
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
                    setReloadCategories(true)
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