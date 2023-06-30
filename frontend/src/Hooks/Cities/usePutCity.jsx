import Swal from "sweetalert";

export const usePutCity = () => {
    const handlePutCity = (id, cityData, onClose, setReloadCities) => {
        const token = localStorage.getItem('token')
        let cityToPost = {
            nombreCiudad: cityData.nombreCiudad,
            descripcionCiudad: cityData.descripcionCiudad,
            latitud: Number(cityData.latitud),
            longitud: Number(cityData.longitud)
        }
        fetch(`http://ec2-18-191-138-20.us-east-2.compute.amazonaws.com/Ciudades/${id}`, {
            method: 'PUT',
            body: JSON.stringify(cityToPost),
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
                        title: 'Ciudad actualizada correctamente',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    setReloadCities(true)
                    onClose()
                    return ''
                } else {
                    Swal({
                        position: 'top-end',
                        icon: 'error',
                        title: 'La ciudad no pudo ser actualizada. Intente más tarde.',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
                return response.json()
            }).then(data => console.log(data))
            .catch(error => console.log(error))

    }

    return [handlePutCity]
}