import React, {useState} from "react";
import Swal from 'sweetalert';
import {useGlobalState} from "../Context/Context";
import {useNavigate} from "react-router-dom";
import {SiteMapSection} from "../Components/sections/SiteMapSection/SiteMapSection.jsx";
import {NameSection} from "../Components/sections/NameSection/NameSection.jsx";
import {NewTourSiteMap} from "../Components/sections/SiteMapSection/NewTourSiteMap.jsx";
import {Input} from "../Components/molecules/Input/Input.jsx";

const CreateProduct = () => {
    const token = localStorage.getItem('token')
    const {setReloadProductsFlag} = useGlobalState();
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        nombre: '',
        descripcion: '',
        ciudad: {nombreCiudad: ''},
        categoria: {nombreCategoria: ''},
        fechaSalida: '',
        fechaLlegada: '',
        listaImagenes: [
            {url: ''}
        ]

    })

    let initialValues = {
        nombre: '',
        descripcion: '',
        ciudad: {nombreCiudad: ''},
        categoria: {nombreCategoria: ''},
        fechaSalida: '',
        fechaLlegada: '',
        listaImagenes: [
            {url: ''}
        ]

    }

    const postTour = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/Tour/agregar', {
            method: 'POST',
            body: JSON.stringify(product),
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
                        title: 'Tour creado correctamente',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    setProduct(initialValues)
                    setReloadProductsFlag(true)
                    navigate('/admin')
                } else {
                    Swal({
                        title: 'Error',
                        text: 'El tour no pudo ser creado. Intente nuevamente más tarde.',
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

    return (
        <>
            <NameSection/>
            <SiteMapSection>
                <NewTourSiteMap/>
            </SiteMapSection>

            <Input
                label="Nombre"
                onChange={(e) => setProduct({...product, nombre: e.target.value})}
                type="text"
                value={product.nombre}
            />

            <div style={{
                padding: '20px 50px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                height: '100%'
            }}>
                <div className="breadCrumbSection">

                </div>
                <div>
                    <form onSubmit={postTour} style={{display: 'flex', flexDirection: 'column', width: '60vw'}}>
                        <label>Nombre*</label>
                        <input style={{marginBottom: '12px'}} type="text" value={product.nombre}
                               onChange={(e) => setProduct({...product, nombre: e.target.value})}/>
                        <label>Descripción*</label>
                        <input style={{marginBottom: '12px'}} type="text" value={product.descripcion}
                               onChange={(e) => setProduct({...product, descripcion: e.target.value})}/>

                        <div style={{display: 'flex', marginBottom: '12px'}}>
                            <div>
                                <label>Ciudad*</label>
                                <input type="text" value={product.ciudad.nombreCiudad} onChange={(e) => setProduct({
                                    ...product,
                                    ciudad: {nombreCiudad: e.target.value}
                                })}/>
                            </div>
                            <div>
                                <label>Categoría*</label>
                                <input type="text" value={product.categoria.nombreCategoria}
                                       onChange={(e) => setProduct({
                                           ...product,
                                           categoria: {nombreCategoria: e.target.value}
                                       })}/>
                            </div>
                            <div>
                                <label>Fecha inicio*</label>
                                <input type="text" value={product.fechaSalida}
                                       onChange={(e) => setProduct({...product, fechaSalida: e.target.value})}/>
                            </div>
                            <div>
                                <label>Fecha salida *</label>
                                <input type="text" value={product.fechaLlegada}
                                       onChange={(e) => setProduct({...product, fechaLlegada: e.target.value})}/>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label>Imagenes*</label>
                            {product.listaImagenes && product.listaImagenes.map((img, idx) => {
                                return (
                                    <input style={{marginBottom: '12px'}} type="text"
                                           value={product.listaImagenes[idx].url} onChange={(e) => {
                                        const imgArray = [...product.listaImagenes]
                                        imgArray[idx] = {url: e.target.value}
                                        setProduct({...product, listaImagenes: imgArray})
                                    }}/>
                                )
                            })}

                            <button style={{width: '200px'}} disabled={product.listaImagenes.length === 5}
                                    onClick={() => setProduct({
                                        ...product,
                                        listaImagenes: [...product.listaImagenes, {url: ''}]
                                    })}>+ Add Image
                            </button>
                        </div>

                        <button style={{width: '200px', marginTop: '20px'}} className="submitButton">Guardar producto
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default CreateProduct