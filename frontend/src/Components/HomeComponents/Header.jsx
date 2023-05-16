import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav style={{ backgroundColor: 'grey' }}>
            <span>DH Booking</span>
            <div>
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

        </nav>
    )
}

export default Header;