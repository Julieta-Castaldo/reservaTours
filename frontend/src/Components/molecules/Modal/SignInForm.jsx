import { useState } from 'react';
import './SignInForm.css'
import { usePostUser } from '../../../Hooks/Users/usePostUser';
import { validateEmail, validatePassword, validateTextFields } from '../../../Helpers/UserFormValidations';
import { useGlobalState } from '../../../Context/Context';
import PlaneAnimation from '../../../Util/images/PlaneAnimation';

const SignInForm = ({ onClose }) => {
    const [error, setError] = useState(false)
    const { loadingPlaneFlag, setLoadingPlaneFlag } = useGlobalState()
    const [newUser, setNewUser] = useState({
        username: '',
        lastname: '',
        email: '',
        password: ''
    })
    const [handlePostUser] = usePostUser()

    const validateForm = (e) => {
        e.preventDefault()
        if (!validateTextFields(newUser.username)) return setError('Ingrese su nombre')
        if (!validateTextFields(newUser.lastname)) return setError('Ingrese su apellido')
        if (!validateEmail(newUser.email)) return setError('El email no es válido')
        if (!validatePassword(newUser.password)) return setError('La contraseña es demasiado corta')
        else setError(false)
        setLoadingPlaneFlag(true)
        handlePostUser(newUser, onClose)
    }

    return (
        <>
            {!loadingPlaneFlag && <form className='create-form'>
                <section className='nameSection'>
                    <div style={{ marginRight: '12px' }}>
                        <label htmlFor="username">Nombre*</label>
                        <input
                            className={error && error.includes('nombre') ? 'redInput' : 'greenInput'}
                            type="text"
                            id="username"
                            value={newUser.username}
                            onChange={(event) => setNewUser({ ...newUser, username: event.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname">Apellido*</label>
                        <input
                            className={error && error.includes('apellido') ? 'redInput' : 'greenInput'}
                            type="text"
                            id="lastname"
                            value={newUser.lastname}
                            onChange={(event) => setNewUser({ ...newUser, lastname: event.target.value })}
                        />
                    </div>
                </section>
                <div>
                    <label htmlFor="email">Email*</label>
                    <input
                        className={error && error.includes('email') ? 'redInput' : 'greenInput'}
                        type="email"
                        id="email"
                        value={newUser.email}
                        onChange={(event) => setNewUser({ ...newUser, email: event.target.value })}
                    />
                </div>
                <div style={{ marginBottom: '8px' }}>
                    <label htmlFor="password">Contraseña*</label>
                    <input
                        className={error && error.includes('contraseña') ? 'redInput' : 'greenInput'}
                        type="password"
                        id="password"
                        value={newUser.password}
                        onChange={(event) => setNewUser({ ...newUser, password: event.target.value })}
                    />
                </div>
                {error && <p>{error}</p>}
                <button type="submit" onClick={validateForm} style={{ padding: '4px 8px' }}>Crear cuenta</button>
            </form>}
            {loadingPlaneFlag && <div style={{ marginTop: '16px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '140px' }}>
                <p style={{ fontSize: '16px', color: 'grey', marginTop: '8px', fontWeight: 'bold' }}>Creando usuario, aguarda unos instantes...</p>
                <PlaneAnimation />
            </div>}

        </>

    )
}

export default SignInForm;