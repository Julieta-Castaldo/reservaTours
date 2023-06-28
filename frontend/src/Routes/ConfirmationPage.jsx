import confirmationLogo from '../Util/images/confirmationLogo.svg';
import { useGlobalState } from '../Context/Context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
    const { auth } = useGlobalState()
    const navigate = useNavigate()
    useEffect(() => {
        if (!auth) navigate('/')
    }, [auth])
    return (
        <div style={{ padding: '20px 50px', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
            <img style={{ width: '100px' }} src={confirmationLogo} />
            <p style={{ fontWeight: 600, fontSize: 28, color: '#FACA0A', marginTop: '8px' }}>
                ¡Felicidades!
            </p>
            <p style={{ marginTop: '12px', color: '#717B8A', textAlign: 'center' }}>
                Tu reserva se ha registrado exitosamente
            </p>
            <div style={{ display: 'flex', marginTop: '16px', marginBottom: '40px' }}>
                <button onClick={()=> navigate('/myProfile')} style={{ color: '#58C1CE', border:'none', fontWeight: 'bold', padding: '6px 12px' }}>
                    Ir a mis reservas
                </button>
                <button onClick={()=> navigate('/')} style={{ color: 'white', backgroundColor: '#FACA0A', padding:'6px 12px', border: 'none', fontWeight:'bold', marginLeft: '16px' }}>
                    Ver más tours
                </button>
            </div>
        </div>
    )
}

export default ConfirmationPage;