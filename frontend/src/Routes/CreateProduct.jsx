import React, { useState } from "react";

const CreateProduct = () => {
    const [user, setUser] = useState({
        nombre: '',
        descripcion: '',
        ciudad: { nombreCiudad: '' },
        categoria: { nombreCategoria: '' },
        fechaSalida: '',
        fechaLlegada: '',
        listaImagenes: [
            { url: '' },
            { url: '' }
        ]

    })

    let initialValues = {
        nombre: '',
        descripcion: '',
        ciudad: { nombreCiudad: '' },
        categoria: { nombreCategoria: '' },
        fechaSalida: '',
        fechaLlegada: '',
        listaImagenes: [
            { url: '' },
            { url: '' }
        ]

    }

    //const history = useHistory();
    const [sucess, setSuccess] = useState(false)
    const postTour = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/Tour/agregar', {
            method: 'POST', 
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
               // history.push('/admin')
               setSuccess(true)
               setUser(initialValues)
            })
            .catch(error => {
                // Handle any errors that occurred during the request
                console.error(error);
            });
    }

    return (
        <div style={{ padding: '20px 50px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
            <div className="breadCrumbSection">

            </div>
            <div>
                <form onSubmit={postTour} style={{ display: 'flex', flexDirection: 'column', width: '60vw' }}>
                    <label>Nombre*</label>
                    <input style={{ marginBottom: '12px' }} type="text" value={user.nombre} onChange={(e) => setUser({ ...user, nombre: e.target.value })} />
                    <label>Descripción*</label>
                    <input style={{ marginBottom: '12px' }} type="text" value={user.descripcion} onChange={(e) => setUser({ ...user, descripcion: e.target.value })} />

                    <div style={{ display: 'flex', marginBottom: '12px' }}>
                        <div>
                            <label>Ciudad*</label>
                            <input type="text" value={user.ciudad.nombreCiudad} onChange={(e) => setUser({ ...user, ciudad: { nombreCiudad: e.target.value } })} />
                        </div>
                        <div>
                            <label>Categoría*</label>
                            <input type="text" value={user.categoria.nombreCategoria} onChange={(e) => setUser({ ...user, categoria: { nombreCategoria: e.target.value } })} />
                        </div>
                        <div>
                            <label>Fecha inicio*</label>
                            <input type="text" value={user.fechaSalida} onChange={(e) => setUser({ ...user, fechaSalida: e.target.value })} />
                        </div>
                        <div>
                            <label>Fecha salida *</label>
                            <input type="text" value={user.fechaLlegada} onChange={(e) => setUser({ ...user, fechaLlegada: e.target.value })} />
                        </div>
                    </div>
                    <label>Imagen*</label>
                    <input style={{ marginBottom: '12px' }} type="text" value={user.listaImagenes[0].url} onChange={(e) => setUser({ ...user, listaImagenes: [{ url: e.target.value }] })} />


                    <button style={{ width: '200px' }} className="submitButton">Guardar producto</button>
                </form>
                {sucess && <p>Producto creado correctamente</p> }

            </div>
        </div>
    )
}

export default CreateProduct