import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../Util/images/logo.svg'
import mobileLogo from '../../Util/images/mobileLogo.svg'
import { ButtonIcon } from "../molecules/ButtonIcon/ButtonIcon";

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
                        <ButtonIcon
                            text='Crear cuenta'
                            // src={
                            //     <IconArrowRight2
                            //         size='18'
                            //         className='iconSVG'
                            //     />
                            // }
                            borderColor={'#05848A'}
                            color={'white'}
                            hoverColor={'#05848A'}
                            bgColor={'#58C1CE'}
                            hoverBgColor={'transparent'}
                            width={'150px'}
                            margin={'0 24px 0 0'}
                        />
                        <ButtonIcon
                            text='Iniciar sesión'
                            // src={
                            //     <IconArrowRight2
                            //         size='18'
                            //         className='iconSVG'
                            //     />
                            // }
                            borderColor={'#05848A'}
                            color={'#58C1CE'}
                            hoverColor={'#05848A'}
                            bgColor={'white'}
                            hoverBgColor={'transparent'}
                            width={'150px'}
                        />
                    </div>
                </div>
                <div className="mobileNav">
                    <Link to='/'>
                        <img className="mobileLogo" src={mobileLogo} alt='Digital Booking' />
                    </Link>
                    <div className="linksSection">
                        <Link>A</Link>
                        <Link>B</Link>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Header;