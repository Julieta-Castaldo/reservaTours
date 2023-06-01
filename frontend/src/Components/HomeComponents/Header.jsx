import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Header.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//Components
import { ButtonIcon } from "../molecules/ButtonIcon/ButtonIcon";
import { CircleButton } from "../molecules/CircleButton/CircleButton";
import { IconArrowRight2 } from "../svgs/IconArrowRight2";
//Logos
import logo from '../../Util/images/logo.svg'
import mobileLogo from '../../Util/images/mobileLogo.svg'
import { IconAddUser } from '../svgs/IconAddUser';
import { IconUser } from '../svgs/IconUser';
import SignInModal from "../molecules/Modal/SignInModal";
import { useGlobalState } from "../../Context/Context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const [openSignIn, setOpenSignIn] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [initials, setInitials] = useState('')
    const navigate = useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const { auth, setAuth } = useGlobalState()

    const handleCloseSession = () => {
        setAuth(false)
        sessionStorage.removeItem('token')
        navigate('/')
        
    }

    useEffect(() => {
        if (auth) {
            if (auth.username && auth.lastname) {
                setInitials(`${auth.username.charAt(0)}${auth.lastname.charAt(0)}`)
            } else if (auth.username) {
                setInitials(auth.username.charAt(0))
            }
        }
    }, [auth])

    return (
        <>
            <nav className="mainNav">
                <div className="rainbow">
                    <div className="greenBox"></div>
                    <div className="yellowBox"></div>
                    <div className="orangeBox"></div>
                </div>
                <div className="header">
                    <div className="desktopNav">
                        <Link to='/'>
                            <img className="logo" src={logo} alt='Digital Booking' />
                        </Link>
                        {!auth ? <div className="linksSection">
                            <ButtonIcon
                                onClick={() => setOpenSignIn(true)}
                                text='Crear cuenta'
                                src={
                                    <IconAddUser
                                        size='18'
                                        className='iconSVG'
                                    />
                                }
                                borderColor={'#05848A'}
                                color={'white'}
                                hoverColor={'#05848A'}
                                bgColor={'#58C1CE'}
                                hoverBgColor={'#A0D7DE'}
                                width={'185px'}
                                margin={'0 24px 0 0'}
                                rIcon={false}
                            />

                            <Link to='/login'>
                                <ButtonIcon
                                    text='Iniciar sesión'
                                    src={
                                        <IconUser
                                            size='22'
                                            className='iconSVG'
                                            color='#7CE3D1'
                                        />
                                    }
                                    borderColor={'#05848A'}
                                    color={'#58C1CE'}
                                    hoverColor={'#05848A'}
                                    bgColor={'white'}
                                    hoverBgColor={'#D6E8EA'}
                                    width={'185px'}
                                    rIcon={false}
                                />
                            </Link>
                        </div> :
                            <div className='desktopInitials'>
                                {auth.rol && auth.rol === 'ADMIN' && <Link to='/admin'>
                                    <ButtonIcon
                                        text='Admin'
                                        src={
                                            <IconArrowRight2
                                                size='22'
                                                className='iconSVG'
                                            />
                                        }
                                        borderColor={'#F2A63B'}
                                        color={'white'}
                                        hoverColor={'white'}
                                        bgColor={'#F2A63B'}
                                        hoverBgColor={'#F2A63B'}
                                        width={'120px'}

                                    />
                                </Link>}
                                <p style={{ color: '#05848A', fontWeight: '700', fontSize: '18px', marginLeft: '16px' }}>
                                    {auth && auth.username}
                                </p>
                                <Button onClick={handleClick}
                                    sx={{
                                        border: '4px solid white',
                                        backgroundColor: '#00EBEB',
                                        color: '#05848A',
                                        fontSize: '24px',
                                        fontWeight: '700',
                                        maxWidth: '32px',
                                        heigth: '32px',
                                        borderRadius: '50%',
                                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                        '&:hover': {
                                            backgroundColor: '#05848A',
                                            color: 'white'
                                        },
                                        marginLeft: '16px'
                                    }}
                                >
                                    {initials}
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    className="desktopInitials"
                                    onClose={handleClose}
                                >

                                    <MenuItem sx={{ fontSize: '16px' }} /*onClick={() => handleOptionClick(option)}*/>
                                        Mi perfil
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: '16px' }} onClick={handleCloseSession} >
                                        Cerrar Sesión
                                    </MenuItem>
                                </Menu>
                            </div>
                        }
                    </div>
                    <div className="mobileNav">
                        <Link to='/'>
                            <img className="mobileLogo" src={mobileLogo} alt='Digital Booking' />
                        </Link>
                        {!auth ? <div className="linksSection">
                            <CircleButton
                                onClick={() => setOpenSignIn(true)}
                                src={
                                    <IconAddUser
                                        size='18'
                                        className='iconSVG'
                                    />
                                }
                                borderColor={'#05848A'}
                                color={'white'}
                                hoverColor={'white'}
                                bgColor={'#58C1CE'}
                                hoverBgColor={'#A0D7DE'}
                                width={'40px'}
                                height={'40px'}
                                margin={'0 16px 0 0'}
                            />

                            <Link to='/login'>
                                <CircleButton
                                    src={
                                        <IconUser
                                            size='20'
                                            className='iconSVG'
                                            color='#7CE3D1'
                                        />
                                    }
                                    borderColor={'#7CE3D1'}
                                    color={'#7CE3D1'}
                                    hoverColor={'#05848A'}
                                    bgColor={'white'}
                                    hoverBgColor={'#D6E8EA'}
                                    width={'40px'}
                                    height={'40px'}
                                />
                            </Link>
                        </div> :
                            <div className="mobileInitials">
                                {auth.rol && auth.rol === 'ADMIN' && <Link to='/admin'>
                                    <ButtonIcon
                                        text='Admin'
                                        src={
                                            <IconArrowRight2
                                                size='22'
                                                className='iconSVG'
                                            />
                                        }
                                        borderColor={'#F2A63B'}
                                        color={'white'}
                                        hoverColor={'white'}
                                        bgColor={'#F2A63B'}
                                        hoverBgColor={'#F2A63B'}
                                        width={'120px'}

                                    />
                                </Link>}
                                <p style={{ color: '#05848A', fontWeight: '700', fontSize: '16px', marginLeft: '16px' }}>
                                    {auth && auth.username}
                                </p>
                                <Button onClick={handleClick}
                                    sx={{
                                        border: '4px solid white',
                                        backgroundColor: '#00EBEB',
                                        color: '#05848A',
                                        fontSize: '16px',
                                        maxWidth: '24px',
                                        heigth: '24px',
                                        borderRadius: '50%',
                                        fontWeight: '700',
                                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                        '&:hover': {
                                            backgroundColor: '#05848A',
                                            color: 'white'
                                        },
                                        marginLeft: '16px'
                                    }}
                                >
                                    {initials}
                                </Button>
                                <Menu
                                    className="mobileInitials"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >

                                    <MenuItem sx={{ fontSize: '16px' }} /*onClick={() => handleOptionClick(option)}*/>
                                        Mi perfil
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: '16px' }} onClick={handleCloseSession} >
                                        Cerrar Sesión
                                    </MenuItem>
                                </Menu>
                            </div>}
                    </div>


                </div>
            </nav>

            <SignInModal isOpen={openSignIn} onClose={() => setOpenSignIn(false)}>
                <h2>Título del modal</h2>
                <p>Contenido del modal</p>
            </SignInModal>
        </>
    )
}

export default Header;