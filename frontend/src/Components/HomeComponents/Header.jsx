import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'
//Components
import { ButtonIcon } from "../molecules/ButtonIcon/ButtonIcon";
import { CircleButton } from "../molecules/CircleButton/CircleButton";
//Logos
import logo from '../../Util/images/logo.svg'
import mobileLogo from '../../Util/images/mobileLogo.svg'
import { IconAddUser } from '../svgs/IconAddUser';
import { IconUser } from '../svgs/IconUser';


const Header = () => {
    return (
        <nav>
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
                    <div className="linksSection">
                        <Link to='/signin'>
                            <ButtonIcon
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
                        </Link>
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
                    </div>
                </div>
                <div className="mobileNav">
                    <Link to='/'>
                        <img className="mobileLogo" src={mobileLogo} alt='Digital Booking' />
                    </Link>
                    <div className="linksSection">
                        <Link to='/signin'>
                            <CircleButton
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
                        </Link>
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
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Header;