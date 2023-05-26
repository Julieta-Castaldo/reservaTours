import React from 'react';
import './Modal.css';
import logo from '../../../Util/images/logo.svg';
import SignInForm from './SignInForm';

function SignInModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <section className="modal">
                <button className="modal-close" onClick={onClose}>
                    X
                </button>

                <div className="modal-content">
                    <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                        <img className="logo" src={logo} alt='Digital Booking' />
                        <p>Crea tu cuenta</p>
                        <p>Podrás reservar y calificar tu experiencia.</p>
                    </article>
                    <article>
                        <SignInForm/>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default SignInModal;