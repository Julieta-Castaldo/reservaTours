import React from 'react';
import './Modal.css';
import NewCityForm from './NewCityForm';

function NewCityModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <section className="modal">
                <button className="modal-close" onClick={onClose}>
                    X
                </button>

                <div className="modal-content">
                    <p style={{ textAlign: 'center', color: '#58C1CE', fontWeight: 700, fontSize: '18px' }}>Crear nueva ciudad</p>
                    <article style={{ margin: '16px 0' }}>
                        <NewCityForm onClose={onClose} />
                    </article>
                </div>
            </section>
        </div>
    );
}

export default NewCityModal;