export const handleDelete = (tourId) => {
    // const tourId = 3; // ID del tour que deseas eliminar

    // Realizar la solicitud DELETE a la API REST
    fetch(`http://localhost:8080/Tour/${tourId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // Aquí puedes agregar encabezados de autenticación si es necesario
        },
    })
        .then(response => {
            if (response.ok) {
                // La solicitud fue exitosa, realizar acciones adicionales si es necesario
                console.log('El tour fue eliminado correctamente');
            } else {
                // La solicitud no fue exitosa, mostrar un mensaje de error o manejar el error adecuadamente
                console.error('Error al eliminar el tour');
            }
        })
        .catch(error => {
            // Ocurrió un error durante la solicitud, mostrar un mensaje de error o manejar el error adecuadamente
            console.error('Error al realizar la solicitud DELETE', error);
        });
};