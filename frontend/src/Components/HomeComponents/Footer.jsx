import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import logo from '../../Util/images/logo.svg'
import mobileLogo from '../../Util/images/mobileLogo.svg'
import { IconArrowRight2 } from "../svgs/IconArrowRight2";
import { ButtonIcon } from "../molecules/ButtonIcon/ButtonIcon";


const Footer = () => {
    return (
        <div className="footer">
            <div className="rainbow">
                <div className="greenBox"></div>
                <div className="yellowBox"></div>
                <div className="orangeBox"></div>
            </div>
            <div className="footerContent">
                <div className="desktopDisposition">
                    <Link to='/'>
                        <img src={logo} alt='Digital Booking' />
                    </Link>
                    <p className="copyText">Copyright © 2023 Digital Booking Todos los derechos reservados.</p>
                    <Link to='/admin'>
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
                    </Link>
                </div>
                <div className="mobileDisposition">
                    <div className="mobileLinks">
                        <Link to='/'>
                            <img src={mobileLogo} alt='Digital Booking' />
                        </Link>
                    </div>
                    <p className="copyText">Copyright © 2023 Digital Booking Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;