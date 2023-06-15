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
import {useGetCities} from "../Hooks/Cities/useGetCities.jsx";

const CreateProduct = () => {
    const token = localStorage.getItem('token')
    const {setReloadProductsFlag} = useGlobalState();
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        nombre: '',
        descripcion: '',
        categoriaId: null,
        ciudadId: null,
        duracion: null,
        listaImagenes: [
            {url: ''}
        ],
        caracteristicasSi: [""],

    })

    const [categories, handleGetCategories] = useGetCategories();
    const [cities, handleGetCities] = useGetCities();
    useEffect(() => {
        handleGetCategories()
        handleGetCities()
    }, []);


    let initialValues = {
        nombre: '',
        descripcion: '',
        categoriaId: null,
        ciudadId: null,
        duracion: null,
        listaImagenes: [
            {url: ''}
        ],
        caracteristicasSi: [""],
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

    console.log(postTour)

    // const handleSubmit = (e) => {
    //     console.log("PostTour", postTour)
    //     postTour()
    //     console.log("PostTour", postTour)
    // }

    return (
        <>
            <NameSection/>
            <SiteMapSection>
                <NewTourSiteMap/>
            </SiteMapSection>
            <CreateProductFormSection>
                <CreateProductForm
                    onSubmit={postTour}
                    // onSubmit={(e) => handleSubmit(e)}
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
                    <Input
                        id="caracteristicasSi"
                        label="Caracteristicas *"
                        onChange={(e) =>
                            setProduct({...product, caracteristicasSi: [e.target.value]}) // Cambio aquí
                        }
                        type="text"
                        value={product.caracteristicasSi[0]} // Cambio aquí
                    />
                    <CreateProductFormSubWrapper>
                        <Select
                            htmlFor="category"
                            label="Categoría: *"
                            selectText={'Seleccione una categoría'}
                            onChange={(e) => setProduct({
                                ...product,
                                categoriaId: e.target.value
                            })}
                            value={product.categoriaId}
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.nombreCategoria}
                                </option>
                            ))}
                        </Select>
                        <Select
                            htmlFor="ciudad"
                            label="Ciudad: *"
                            selectText={'Seleccione una ciudad'}
                            onChange={(e) => setProduct({
                                ...product,
                                ciudadId: e.target.value
                            })}
                            value={product.idCiudad}
                        >
                            {cities.map((ciudad) => (
                                <option key={ciudad.id} value={ciudad.id}>
                                    {ciudad.nombreCiudad}
                                </option>
                            ))}
                        </Select>

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
                        borderRadius={'0.8rem'}
                    />

                </CreateProductForm>
            </CreateProductFormSection>
        </>
    )
}

export default CreateProduct