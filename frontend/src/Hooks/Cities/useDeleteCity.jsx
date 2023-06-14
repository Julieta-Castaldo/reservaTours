import Swal from "sweetalert";

export const useDeleteCity = () => {
    const handleDeleteCity = (id, setReloadCities) => {
        const token = localStorage.getItem('token')
        fetch(`http://localhost:8080/Ciudades/${id}`, {
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
                        title: 'Ciudad eliminada correctamente',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    setReloadCities(true)
                    return ''
                } else {
                    Swal({
                        position: 'top-end',
                        icon: 'error',
                        title: 'La ciudad no pudo ser eliminada. Intente más tarde.',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })

    }

    return [handleDeleteCity]
}