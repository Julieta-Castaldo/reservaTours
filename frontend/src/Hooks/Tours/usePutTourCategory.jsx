import Swal from "sweetalert";

export const usePutTourCategory = () => {
    const token = localStorage.getItem('token')
    const handlePutTourCategory = (id, idCategory, setReloadProductsFlag) => {
        console.log(id,idCategory)
        fetch(`http://localhost:8080/Tour/update/categoria?tourId=${id}&categoriaId=${idCategory}`, {
            method: 'PUT',
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
                        title: 'Tour actualizado',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    Swal({
                        title: 'Error',
                        text: 'El tour no pudo ser actualizado. Intente nuevamente más tarde.',
                        icon: 'error',
                        button: 'Aceptar',
                    });
                }
                setReloadProductsFlag(true)
                return response.json()
            })
    }

    return [handlePutTourCategory]
}