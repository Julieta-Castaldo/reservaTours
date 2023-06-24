import { useEffect, useState } from "react";
import { useGlobalState } from "../Context/Context.jsx";
import { useNavigate } from "react-router-dom";
import { Divider, Checkbox, TextField } from '@mui/material';
import { ButtonIcon } from "../Components/molecules/ButtonIcon/ButtonIcon.jsx";
import { IconArrowRight2 } from "../Components/svgs/IconArrowRight2.jsx";

const MakeReservation = () => {
    const { auth } = useGlobalState()
    const [reservationData, setReservationData] = useState({
        tourId: null,
        usuarioId: null,
        fechaInicio: null,
        duracion: null,
        medioDePago: '',
        menu: '',
        alojamiento: '',
        informacionDeSalud: ''
    })
    //LADY, TODOS LOS ESTILOS DEBERÍAN PASARSE AL CSS, LOS PUSE ACÁ TEMPORALMENTE
    return (
        <div style={{ padding: '50px 50px' }}>
            <section className="sectionHeader" style={{ marginBottom: '32px' }}>
                <article style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: '#58C1CE', height: '80px', width: '80px' }}>
                        {/*EL ÍCONO VA ACÁ */}
                    </div>
                    <div>
                        <p>Finalizar reserva</p>
                        <p>¡Solo falta un paso más para tu viaje!</p>
                    </div>
                </article>
            </section>
            <div style={{ display: 'flex' }}>
                <section style={{ width: '60%' }}>
                    <article>
                        <Divider>Información personal</Divider>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginRight: '12px', width: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <label htmlFor="username">Nombre*</label>
                                    <input
                                        //className={error && error.includes('nombre') ? 'redInput' : 'greenInput'}
                                        type="text"
                                        id="username"
                                    //value={userValues.username}
                                    //onChange={(event) => setUserValues({ ...userValues, username: event.target.value })}
                                    />
                                </div>
                                <div style={{ marginRight: '12px', width: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <label htmlFor="lastname">Apellido*</label>
                                    <input
                                        //className={error && error.includes('apellido') ? 'redInput' : 'greenInput'}
                                        type="text"
                                        id="lastname"
                                    //value={userValues.lastname}
                                    //onChange={(event) => setUserValues({ ...userValues, lastname: event.target.value })}
                                    />
                                </div>
                            </div>

                            <div style={{ margin: '16px 0', display: 'flex', flexDirection: 'column' }}>
                                <label htmlFor="email">Email*</label>
                                <input
                                    //className={error && error.includes('email') ? 'redInput' : 'greenInput'}
                                    type="email"
                                    id="email"
                                //value={userValues.email}
                                //onChange={(event) => setUserValues({ ...userValues, email: event.target.value })}
                                />
                            </div>
                        </div>
                    </article>
                    <article style={{ width: '100%' }}>
                        <Divider>Detalle de pago</Divider>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <div style={{ width: '110px', height: '62px', backgroundColor: 'lightblue' }}></div>
                            <p>TDC</p>
                            <Checkbox
                                //onChange={handleChangeCheck}
                                name="desayuno"
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 24 },
                                }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '16px' }}>
                            <div style={{ width: '110px', height: '62px', backgroundColor: 'lightblue' }}></div>
                            <p>Efectivo</p>
                            <Checkbox
                                //onChange={handleChangeCheck}
                                name="desayuno"
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 24 },
                                }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '16px' }}>
                            <div style={{ width: '110px', height: '62px', backgroundColor: 'lightblue' }}></div>
                            <p>Transferencia</p>
                            <Checkbox
                                //onChange={handleChangeCheck}
                                name="desayuno"
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 24 },
                                }} />
                        </div>
                    </article>
                    <article>
                        <Divider>Información adicional</Divider>
                        <p>
                            Dejanos tus recomendaciones o comentarios de salud importantes para tener en
                            cuenta al organizar el tour.
                        </p>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={6}
                            sx={{ width: '100%' }}
                            defaultValue="Default Value"
                        />

                    </article>
                </section>
                <section style={{ width: '40%', marginLeft: '24px' }}>
                    <article style={{ backgroundColor: '#EEF9FA', padding: '16px' }}>
                        <p>Tu orden</p>
                        <div style={{ borderRadius: '20px', backgroundColor: 'white', padding: '16px' }}>
                            <p>Total</p>
                        </div>
                    </article>
                    <ButtonIcon
                        text='Reservar tour'
                        src={
                            <IconArrowRight2
                                size='18'
                                className='iconSVG'
                            />
                        }
                        borderColor={'#05848A'}
                        color={'white'}
                        hoverColor={'#05848A'}
                        bgColor={'#05848A'}
                        hoverBgColor={'transparent'}
                        //onClick={handleReserva}
                    />
                </section>
            </div>
        </div>
    )
}

export default MakeReservation;