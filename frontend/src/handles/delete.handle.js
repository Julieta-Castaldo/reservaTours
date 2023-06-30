export const handleDelete = (tourId) => {

    fetch(`http://ec2-18-191-138-20.us-east-2.compute.amazonaws.com/Tour/${tourId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                console.log('El tour fue eliminado correctamente');
            } else {
                console.error('Error al eliminar el tour');
            }
        })
        .catch(error => {
            console.error('Error al realizar la solicitud DELETE', error);
        });
};