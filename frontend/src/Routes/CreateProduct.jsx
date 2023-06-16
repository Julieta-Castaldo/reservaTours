import {useEffect, useState} from "react";
import Swal from 'sweetalert';
import {useGlobalState} from "../Context/Context";
import {useNavigate} from "react-router-dom";
import {SiteMapSection} from "../Components/sections/SiteMapSection/SiteMapSection.jsx";
import {NameSection} from "../Components/sections/NameSection/NameSection.jsx";
import {NewTourSiteMap} from "../Components/sections/SiteMapSection/NewTourSiteMap.jsx";
import {Input} from "../Components/molecules/Input/Input.jsx";
import {
    CreateProductForm,
    CreateProductFormImages,
    CreateProductFormSection,
    CreateProductFormSubWrapper
} from "./CreateProduct.styled.js";
import {ButtonIcon} from "../Components/molecules/ButtonIcon/ButtonIcon.jsx";
import {IconArrowRight2} from "../Components/svgs/IconArrowRight2.jsx";
import {AddImage} from "../Components/molecules/AddImage/AddImage.jsx";
import {useGetCategories} from "../Hooks/Categories/useGetCategories.jsx";
import {Select} from "../Components/molecules/Select/Select.jsx";

const CreateProduct = () => {
    const token = localStorage.getItem('token')
    const {setReloadProductsFlag} = useGlobalState();
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        nombre: '',
        descripcion: '',
        ciudad: { nombreCiudad: '' },
        categoria: { nombreCategoria: '' },
        duracion: '',
        listaImagenes: [
            {url: ''}
        ]

    })

    const [categories, handleGetCategories] = useGetCategories();
    useEffect(() => {
        handleGetCategories()
    }, []);


    let initialValues = {
        nombre: '',
        descripcion: '',
        ciudad: { nombreCiudad: '' },
        categoria: { nombreCategoria: '' },
        duracion: '',
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


    const handleAddImage = (e) => {
        e.preventDefault();
        setProduct({
            ...product,
            listaImagenes: [...product.listaImagenes, {url: ''}]
        })
    }

    return (
        <>
            <NameSection/>
            <SiteMapSection>
                <NewTourSiteMap/>
            </SiteMapSection>
            <CreateProductFormSection>
                <CreateProductForm
                    onSubmit={postTour}
                    style={{display: 'flex', flexDirection: 'column', width: '60vw'}}
                >
                    <Input
                        label="Nombre *"
                        onChange={(e) => setProduct({...product, nombre: e.target.value})}
                        type="text"
                        value={product.nombre}
                    />
                    <Input
                        label="Descripción *"
                        onChange={(e) => setProduct({...product, descripcion: e.target.value})}
                        type="text"
                        value={product.descripcion}
                    />
                    <CreateProductFormSubWrapper>
                        <Select
                            htmlFor="category"
                            label="Categoría: *"
                            onChange={(e) => setProduct({
                                ...product,
                                categoria: {nombreCategoria: e.target.value}
                            })}
                            value={product.categoria.nombreCategoria}
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.nombreCategoria}
                                </option>
                            ))}
                        </Select>
                        {/*<div>*/}
                        {/*    <label htmlFor="category">Categoría:</label>*/}
                        {/*    <select*/}
                        {/*        id="category"*/}
                        {/*        value={product.categoria.nombreCategoria}*/}
                        {/*        onChange={(e) => setProduct({*/}
                        {/*            ...product,*/}
                        {/*            categoria: {nombreCategoria: e.target.value}*/}
                        {/*        })}*/}
                        {/*    >*/}
                        {/*        <option value="">Seleccione una categoría</option>*/}
                        {/*        {categories.map((category) => (*/}
                        {/*            <option key={category.id} value={category.id}>*/}
                        {/*                {category.nombreCategoria}*/}
                        {/*            </option>*/}
                        {/*        ))}*/}
                        {/*    </select>*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    <label htmlFor="ciudad">Ciudad:</label>*/}
                        {/*    <select*/}
                        {/*        id="ciudad"*/}
                        {/*        value={product.ciudad.nombreCiudad}*/}
                        {/*        onChange={(e) => setProduct({*/}
                        {/*            ...product,*/}
                        {/*            ciudad: {nombreCiudad: e.target.value}*/}
                        {/*        })}*/}
                        {/*    >*/}
                        {/*        <option value="">Seleccione una categoría</option>*/}
                        {/*        {ciudades.map((ciudad) => (*/}
                        {/*            <option key={ciudad.id} value={ciudad.id}>*/}
                        {/*                {ciudad.nombreCiudad}*/}
                        {/*            </option>*/}
                        {/*        ))}*/}
                        {/*    </select>*/}
                        {/*</div>*/}

                        <Input
                            label="Duracion: *"
                            onChange={(e) => setProduct({...product, duracion: e.target.value})}
                            type="text"
                            value={product.duracion}
                        />
                    </CreateProductFormSubWrapper>
                    <label>Imagenes: *</label>
                    <CreateProductFormImages>
                        {/*<ImageBox*/}
                        {/*    src={"https://assets-news.housing.com/news/wp-content/uploads/2022/06/28101013/15-worlds-best-places-to-visit-18.jpg"}*/}
                        {/*/>*/}

                        {product.listaImagenes && product?.listaImagenes.map((img, idx) => {
                            return (
                                <input
                                    key={idx}
                                    style={{marginBottom: '12px'}}
                                    type="text"
                                    value={product.listaImagenes[idx].url}
                                    onChange={(e) => {
                                        const imgArray = [...product.listaImagenes]
                                        imgArray[idx] = {url: e.target.value}
                                        setProduct({...product, listaImagenes: imgArray})
                                    }}
                                />
                            )
                        })}
                        <AddImage
                            onClick={(e) => handleAddImage(e)}
                            disabled={product.listaImagenes.length === 5}
                        />
                    </CreateProductFormImages>

                    <ButtonIcon
                        type='submit'
                        text='Guardar producto'
                        src={
                            <IconArrowRight2
                                size='18'
                                className='ico nSVG'
                            />
                        }
                        color={'white'}
                        hoverColor={'white'}
                        bgColor={'#58C1CE'}
                        hoverBgColor={'#F2A63B'}
                    />

                </CreateProductForm>
            </CreateProductFormSection>


        </>
    )
}

export default CreateProduct