import { NameSection } from "../Components/sections/NameSection/NameSection.jsx";
import { SiteMapSection } from "../Components/sections/SiteMapSection/SiteMapSection.jsx";
import { PanelSection } from "../Components/sections/PanelSection/PanelSection.jsx";
import { useEffect, useState } from "react";
import { useGlobalState } from "../Context/Context.jsx";
import { useNavigate } from "react-router-dom";
import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { validateEmail, validateTextFields } from "../Helpers/UserFormValidations.jsx";

const UserProfile = () => {
    const { auth } = useGlobalState();
    const navigate = useNavigate()
    const [selectedTab, setSelectedTab] = useState('profile');
    const [error, setError] = useState(false)
    const { id, username, lastname, email } = auth;

    const [userValues, setUserValues] = useState({
        username: '',
        lastname: '',
        email: ''
    })

    const validateForm = (e) => {
        e.preventDefault()
        if (!validateTextFields(userValues.username)) return setError('Ingrese su nombre')
        if (!validateTextFields(userValues.lastname)) return setError('Ingrese su apellido')
        if (!validateEmail(userValues.email)) return setError('El email no es válido')
        else setError(false)
        //handlePostUser(newUser, onClose)
    }

    const children = [
        <ToggleButton selected={selectedTab === 'profile'} onClick={() => setSelectedTab('profile')} value="profile" key="profile">
            Mi perfil
        </ToggleButton>,
        <ToggleButton selected={selectedTab === 'favoritos'} onClick={() => setSelectedTab('favoritos')} value="favoritos" key="favoritos">
            Favoritos
        </ToggleButton>,
        <ToggleButton selected={selectedTab === 'reservas'} onClick={() => setSelectedTab('reservas')} value="reservas" key="reservas">
            Mis reservas
        </ToggleButton>
    ];

    const control = {
        value: 'left',
        exclusive: true,
    };

    useEffect(() => {
        if (!auth) navigate('/')

        if (auth) setUserValues({ username: username, lastname: lastname, email: email })
    }, [])

    return (
        <div style={{ padding: '50px 50px' }}>
            <Stack spacing={2} alignItems="center">
                <ToggleButtonGroup {...control} aria-label="Medium sizes">
                    {children}
                </ToggleButtonGroup>
            </Stack>

            <div>
                {selectedTab === 'profile' && <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <form className='create-form' style={{ width: '600px' }}>
                        <section className='nameSection'>
                            <div style={{ marginRight: '12px', width: '100%' }}>
                                <label htmlFor="username">Nombre*</label>
                                <input
                                    className={error && error.includes('nombre') ? 'redInput' : 'greenInput'}
                                    type="text"
                                    id="username"
                                    value={userValues.username}
                                    onChange={(event) => setUserValues({ ...userValues, username: event.target.value })}
                                />
                            </div>
                            <div style={{ marginRight: '12px', width: '100%' }}>
                                <label htmlFor="lastname">Apellido*</label>
                                <input
                                    className={error && error.includes('apellido') ? 'redInput' : 'greenInput'}
                                    type="text"
                                    id="lastname"
                                    value={userValues.lastname}
                                    onChange={(event) => setUserValues({ ...userValues, lastname: event.target.value })}
                                />
                            </div>
                        </section>
                        <div style={{ marginBottom: '16px' }}>
                            <label htmlFor="email">Email*</label>
                            <input
                                className={error && error.includes('email') ? 'redInput' : 'greenInput'}
                                type="email"
                                id="email"
                                value={userValues.email}
                                onChange={(event) => setUserValues({ ...userValues, email: event.target.value })}
                            />
                        </div>
                        {error && <p>{error}</p>}
                        <button type="submit" onClick={validateForm} style={{ padding: '4px 8px' }}>Actualizar perfil</button>
                    </form>

                </div>}
            </div>
        </div>
    )
}

export default UserProfile;