import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../Util/images/logo.svg'
import mobileLogo from '../../Util/images/mobileLogo.svg'

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
                        <Link to='/'>
                            <h3>Home</h3>
                        </Link>
                        <Link to='/login'>
                            <h3>Login</h3>
                        </Link>
                        <Link to='/signUp'>
                            <h3>Sing Up</h3>
                        </Link>
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