import React, { useEffect } from "react";
import mobileLogo from '../Util/images/mobileLogo.svg'
import './Login.css';
import { Link } from "react-router-dom";
import { IconArrowRight2 } from "../Components/svgs/IconArrowRight2";
import { ButtonIcon } from "../Components/molecules/ButtonIcon/ButtonIcon";

const Login = () => {

    useEffect(() => {
       window.scrollTo(0,0)
    }, [])
    
    return (
        <div className="loginView">
            <section className="headerSection">
                <div className="imageBox">
                    <img src={mobileLogo} alt='Digital Booking' />
                </div>
                <p className="sectionTitle">Inicia sesión</p>
                <p className="subtitle">¡Bienvenid@ de vuelta! Por favor, ingresa tus datos de inicio de sesión.</p>
            </section>
            <section className="formSection">
                <form className="loginForm">

                    <label>Email</label>
                    <input style={{ marginBottom: '12px' }} type="mail" />

                    <label>Contraseña</label>
                    <input style={{ marginBottom: '12px' }} type="password" />

                    <Link className="passwordLink">Olvidé mi contraseña</Link>

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
                        />
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Login;