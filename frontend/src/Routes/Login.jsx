import React, { useEffect, useState } from "react";
import mobileLogo from '../Util/images/mobileLogo.svg'
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { IconArrowRight2 } from "../Components/svgs/IconArrowRight2";
import { ButtonIcon } from "../Components/molecules/ButtonIcon/ButtonIcon";
import { useGlobalState } from "../Context/Context";
import Swal from 'sweetalert';
import { validateEmail, validatePassword } from "../Helpers/UserFormValidations";
import SignInModal from "../Components/molecules/Modal/SignInModal";
import PlaneAnimation from "../Util/images/PlaneAnimation";

const Login = () => {
    const [openSignIn, setOpenSignIn] = useState(false)
    const { setAuth } = useGlobalState()
    const { loadingPlaneFlag, setLoadingPlaneFlag } = useGlobalState()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const initialValues = {
        email: '',
        password: ''
    }
    const navigate = useNavigate()
    const [error, setError] = useState('');
    const interestingTour = localStorage.getItem('tourDeInteres')
    const showErrorAlert = () => {
        Swal({
            title: 'Error',
            text: 'Email o contraseña incorrectos. Intente nuevamente.',
            icon: 'error',
            button: 'Aceptar',
        });
    };

    const postData = () => {
        setLoadingPlaneFlag(true)
        fetch('http://localhost:8080/api/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                setLoadingPlaneFlag(false)
                Swal({
                    position: 'top-end',
                    icon: 'success',
                    title: '¡Bienvenido!',
                    showConfirmButton: false,
                    timer: 2000
                });
                const jwtToken = data.response.jwt;
                const userData = data.usuarioDTO
                setAuth(userData)
                setUser(initialValues)
                localStorage.setItem('token', jwtToken)

                if (interestingTour) navigate(`/tour/${interestingTour}`)
                else navigate('/')
            })
            .catch(error => {
                console.error("Error:", error);
                showErrorAlert();
            });
    }
    const handleLogin = (e) => {
        e.preventDefault()
        setError('');

        if (!validateEmail(user.email)) {
            setError('El correo electrónico no tiene el formato correcto.');
            return;
        }

        if (!validatePassword(user.password)) {
            setError('La contraseña es demasiado corta.');
            return;
        }


        postData();


    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <div className="loginView">
            <section className="headerSection">
                <div className="imageBox">
                    <img src={mobileLogo} alt='Digital Booking' />
                </div>
                <p className="sectionTitle">Inicia sesión</p>
                <p className="subtitle">¡Bienvenid@ de vuelta! Por favor, ingresa tus datos de inicio de sesión.</p>
                <p style={{ fontSize: '14px', color: 'grey', marginTop: '8px' }}>Debes estar logueado para poder reservar. <br /> ¿No tenes una cuenta? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setOpenSignIn(true)}>Crear una</span> </p>
            </section>
            <section className="formSection">
                {!loadingPlaneFlag && <form className="loginForm">

                    <label>Email</label>
                    <input style={{ marginBottom: '12px', borderColor: error ? 'red' : '' }}
                        type="email"
                        id="email"
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                            setError('')
                        }}
                        value={user.email}
                    />
                    <label>Contraseña</label>
                    <input style={{ marginBottom: '12px', borderColor: error ? 'red' : '' }}
                        type="password"
                        id="password"
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                            setError('')
                        }}
                        value={user.password}
                    />

                    <Link className="passwordLink">Olvidé mi contraseña</Link>

                    {error && <p>{error}</p>}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                        <ButtonIcon
                            text='Iniciar sesión'
                            src={
                                <IconArrowRight2
                                    size='22'
                                    className='iconSVG'
                                />
                            }
                            borderColor={'#58C1CE'}
                            color={'white'}
                            hoverColor={'white'}
                            bgColor={'#58C1CE'}
                            hoverBgColor={'#00B9C2'}
                            width={'180px'}
                            onClick={handleLogin}
                            disabled={error}
                        />
                    </div>
                </form>}
                {loadingPlaneFlag && <div style={{ marginTop: '16px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '140px' }}>
                    <p style={{ fontSize: '16px', color: 'grey', marginTop: '8px', fontWeight: 'bold' }}>Iniciando sesión, aguarda unos instantes...</p>
                    <PlaneAnimation/>
                </div>}
            </section>
            <SignInModal isOpen={openSignIn} onClose={() => setOpenSignIn(false)}></SignInModal>

        </div>
    )
}

export default Login;