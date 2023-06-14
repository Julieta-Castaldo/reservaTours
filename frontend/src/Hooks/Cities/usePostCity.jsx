import Swal from "sweetalert";

export const usePostCity = () => {
    const handlePostCity = (cityData, onClose) => {
        const token = localStorage.getItem('token')
        let cityToPost = {
            nombreCiudad: cityData.nombreCiudad,
            descripcionCiudad: cityData.descripcionCiudad,
            latitud: Number(cityData.latitud),
            longitud: Number(cityData.longitud)
        }
        fetch('http://localhost:8080/Ciudades/agregar', {
            method: 'POST',
            body: JSON.stringify(cityToPost),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    Swal({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Ciudad creada correctamente',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    onClose()
                    return ''
                } else {
                    Swal({
                        position: 'top-end',
                        icon: 'error',
                        title: 'La ciudad no pudo ser creada. Intente más tarde.',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
                return response.json()
            }).then(data => console.log(data))
            .catch(error => console.log(error))

    }

    return [handlePostCity]
}