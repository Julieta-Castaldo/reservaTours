import React, { useState } from 'react';
import './Modal.css';
import SignInForm from './SignInForm';
import UserLogo from '../../../Util/images/UserLogo.svg';
import UserGlassesLogo from '../../../Util/images/UserGlassesLogo.svg';
import { useGlobalState } from '../../../Context/Context';

function SignInModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    const { loadingPlaneFlag, setLoadingPlaneFlag } = useGlobalState()
    const [changingPassword, setChangingPassword] = useState(false)
    return (
        <div className="modal-overlay">
            <section className="modal">
                <button className="modal-close" onClick={onClose}>
                    X
                </button>

                <div className="modal-content">
                    <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                        <p style={{ fontSize: '22px', color: '#717B8A', fontWeight: 'bold' }}>Crea tu cuenta</p>
                        <p style={{ marginBottom: '8px' }}>Podrás reservar y calificar tu experiencia.</p>
                       {!loadingPlaneFlag && <img className="logo" style={{ width: '80px' }} src={changingPassword ? UserGlassesLogo : UserLogo} alt='Digital Booking' />}
                    </article>
                    <article>
                        <SignInForm onClose={onClose} setChangingPassword={setChangingPassword} loadingPlaneFlag={loadingPlaneFlag} setLoadingPlaneFlag={setLoadingPlaneFlag}/>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default SignInModal;