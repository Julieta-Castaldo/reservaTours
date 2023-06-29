import React, { useEffect, useState } from "react";
import { useGlobalState } from "../Context/Context";
import { usePostCategory } from "../Hooks/Categories/usePostCategory";
import { validateTextFields } from "../Helpers/UserFormValidations";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IconText } from "../Components/molecules/IconText/IconText";
import { IconArrowRight2 } from "../Components/svgs/IconArrowRight2";

const CreateCategory = () => {
    const { auth } = useGlobalState()
    const [error, setError] = useState(false)
    const [handlePostCategory] = usePostCategory()
    const navigate = useNavigate()
    const [category, setCategory] = useState({
        nombreCategoria: '',
        descripcionCategoria: '',
        url_imagen: ''
    })

    let initialValues = {
        nombreCategoria: '',
        descripcionCategoria: '',
        url_imagen: ''
    }

    const postCategory = (e) => {
        e.preventDefault()
        if (validateTextFields(category.nombreCategoria) && validateTextFields(category.descripcionCategoria) && validateTextFields(category.url_imagen)) {
            handlePostCategory(category)
            setCategory(initialValues)
        } else {
            setError('Debes completar todos los campos para crear la categoría')
        }
    }

    useEffect(() => {
        if (!auth) navigate('/')
    }, [auth])

    return (
        <div style={{ padding: '20px 50px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'initial', marginLeft: '50px' }}>
                <Link
                    to='/admin'
                    rel="noopener noreferrer"
                    target="_self"
                >
                    <IconText
                        text='Admin'
                        color={'#B2BEC7'}
                        fontSize='1.4rem'
                        lineHeight='4.2rem'
                        fontWeight='400'
                        rIcon={true}
                        src={
                            <IconArrowRight2
                                size='14'
                                color={'#B2BEC7'}
                            />
                        }
                    />
                </Link>
                <IconText
                    text='New Category'
                    color={'#F2A63B'}
                    fontSize='1.4rem'
                    lineHeight='4.2rem'
                    fontWeight='700'
                    rIcon={true}
                />

            </div>
            <div onSubmit={postCategory}>
                <p style={{ color: 'var(--text, #717B8A)', fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>Crear categoría</p>
                <form style={{ display: 'flex', flexDirection: 'column', width: '60vw' }}>
                    <label>Nombre*</label>
                    <input style={{ marginBottom: '12px' }} type="text" value={category.nombreCategoria} onChange={(e) => setCategory({ ...category, nombreCategoria: e.target.value })} />
                    <label>Descripción*</label>
                    <input style={{ marginBottom: '12px' }} type="text" value={category.descripcionCategoria} onChange={(e) => setCategory({ ...category, descripcionCategoria: e.target.value })} />
                    <label>Imagen*</label>
                    <input style={{ marginBottom: '12px' }} type="text" value={category.url_imagen} onChange={(e) => setCategory({ ...category, url_imagen: e.target.value })} />
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <button style={{ width: '200px', marginTop: '20px' }} className="submitButton">Guardar categoría</button>
                </form>

            </div>
        </div>
    )
}

export default CreateCategory