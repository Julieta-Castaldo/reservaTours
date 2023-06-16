import { useState, useEffect } from 'react';
import './SignInForm.css'
import { usePostCity } from '../../../Hooks/Cities/usePostCity';
import { validateTextFields, validateNumberFields } from '../../../Helpers/UserFormValidations';
import { usePutCity } from '../../../Hooks/Cities/usePutCity';

const NewCityForm = ({ onClose, isNewCity, initialValue, setReloadCities }) => {
    const [error, setError] = useState(false)
    const [newCity, setNewCity] = useState({
        nombreCiudad: '',
        descripcionCiudad: '',
        latitud: null,
        longitud: null
    })
    const [handlePostCity] = usePostCity()
    const [handlePutCity] = usePutCity()

    const validateForm = (e) => {
        e.preventDefault()
        if (!validateTextFields(newCity.nombreCiudad)) return setError('Ingrese el nombre de la ciudad')
        if (!validateTextFields(newCity.descripcionCiudad)) return setError('Ingrese una descripción breve')
        if (!validateNumberFields(newCity.latitud)) return setError('Ingrese la latitud o corrija su formato')
        if (!validateNumberFields(newCity.longitud)) return setError('Ingrese la longitud o corrija su formato')
        else setError(false)

        if(isNewCity) handlePostCity(newCity, onClose, setReloadCities)
        else handlePutCity(newCity.id, newCity, onClose, setReloadCities)
    }

    useEffect(() => {
        setError(false)
    }, [newCity])

    useEffect(() => {
        if (!isNewCity && initialValue) {
            setNewCity({
                id: initialValue.id,
                nombreCiudad: initialValue.nombreCiudad,
                descripcionCiudad: initialValue.descripcionCiudad,
                latitud: initialValue.latitud,
                longitud: initialValue.longitud
            })
        }
    }, [isNewCity, initialValue])
    return (
        <form className='create-form'>
            <div>
                <label htmlFor="nombreCiudad">Nombre de la ciudad*</label>
                <input
                    className={error && error.includes('nombre') ? 'redInput' : 'greenInput'}
                    type="text"
                    id="nombreCiudad"
                    value={newCity.nombreCiudad}
                    onChange={(event) => setNewCity({ ...newCity, nombreCiudad: event.target.value })}
                />
            </div>
            <div style={{ marginBottom: '8px' }}>
                <label htmlFor="descripcionCiudad">Descripción*</label>
                <input
                    className={error && error.includes('descripción') ? 'redInput' : 'greenInput'}
                    type="text"
                    id="descripcionCiudad"
                    value={newCity.descripcionCiudad}
                    onChange={(event) => setNewCity({ ...newCity, descripcionCiudad: event.target.value })}
                />
            </div>
            <section className='nameSection'>
                <div style={{ marginRight: '12px' }}>
                    <label htmlFor="latitud">Latitud*</label>
                    <input
                        className={error && error.includes('latitud') ? 'redInput' : 'greenInput'}
                        type="number"
                        id="latitud"
                        value={newCity.latitud}
                        onChange={(event) => setNewCity({ ...newCity, latitud: event.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="longitud">Longitud*</label>
                    <input
                        className={error && error.includes('longitud') ? 'redInput' : 'greenInput'}
                        type="number"
                        id="longitud"
                        value={newCity.longitud}
                        onChange={(event) => setNewCity({ ...newCity, longitud: event.target.value })}
                    />
                </div>
            </section>
            {error && <p style={{ marginTop: '8px' }}>{error}</p>}
            <button type="submit" onClick={validateForm} style={{ padding: '4px 8px' }}>{isNewCity ? 'Crear ciudad' : 'Editar ciudad'}</button>
        </form>
    )
}

export default NewCityForm;