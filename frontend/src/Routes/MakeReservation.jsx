import { useEffect, useState } from "react";
import { useGlobalState } from "../Context/Context.jsx";
import { useNavigate } from "react-router-dom";
import { Divider, Checkbox, TextField, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { ButtonIcon } from "../Components/molecules/ButtonIcon/ButtonIcon.jsx";
import { IconArrowRight2 } from "../Components/svgs/IconArrowRight2.jsx";
import './MakeReservation.css'
import DatePicker from "react-multi-date-picker"
//Helper
import { DateFormater } from "../Helpers/DateFormater.jsx";
//Hooks
import { usePostReserva } from "../Hooks/Reservas/usePostReserva.jsx";
import usdImage from '/src/Util/images/total.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';


const MakeReservation = () => {
    const { auth } = useGlobalState()
    const navigate = useNavigate()
    const [reservationData, setReservationData] = useState({
        tourId: null,
        usuarioId: null,
        fechaInicio: null,
        medioDePago: '',
        menu: '',
        alojamiento: '',
        informacionDeSalud: null
    })
    const [error, setError] = useState(false)
    const [selectedDates, setSelectedDates] = useState([])
    const prefilledData = JSON.parse(localStorage.getItem('prefilledReservationData'))
    const { usuarioId, fechaInicio, tourId, tourImage, precio, bussyDates, dates, duracion } = prefilledData
    const [handlePostReserva] = usePostReserva()

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!auth && tourId) navigate(`/tour/:${tourId}`)
        else if (!auth) navigate('/')
    }, [])

    useEffect(() => {
        setReservationData({ ...reservationData, tourId: Number(tourId), usuarioId: usuarioId, fechaInicio: fechaInicio[0] })
    }, [prefilledData])

    useEffect(() => {
        setSelectedDates(dates)
    }, [])

    const handleReserva = () => {
        if (reservationData.menu === '' || reservationData.alojamiento === '' || reservationData.medioDePago === '') {
            setError('Para reservar, debes completar todos los campos obligatorios')
            return ''
        }

        handlePostReserva(reservationData)

    }

    useEffect(() => {
        setError(false)
    }, [reservationData])
    //LADY, TODOS LOS ESTILOS DEBERÍAN PASARSE AL CSS, LOS PUSE ACÁ TEMPORALMENTE
    return (
        <div style={{ padding: '50px 50px' }}>
            <section className="sectionHeader" style={{ marginBottom: '32px', marginLeft: '12%' }}>
                <article style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#D7F0F3', borderRadius: '5px', height: '80px', width: '80px', marginRight: '40px' }}>
                        <img src="/src/Util/images/carrito.png" alt="Carrito" style={{ width: '60%', objectFit: 'cover' }} />
                    </div>
                    <div class="finalizar-reserva">
                        <p>Finalizar reserva</p>
                        <p>¡Solo falta un paso más para tu viaje!</p>
                    </div>
                </article>
            </section>
            <div style={{ display: 'flex' }}>
                <section style={{ flex: '1', marginLeft: '12%' }}>
                    <article>
                        <Divider style={{ color: 'var(--text, #717B8A)', marginBottom: '40px', fontSize: '20px', fontFamily: 'Roboto',fontWeight: 'bold',fontWeight: 500, lineHeight: '31.813px' }}>Información personal</Divider>


                        <div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flexGrow: 1, marginRight: '12px', display: 'flex', flexDirection: 'column' }}>
                                    <label htmlFor="username" className="custom-label">Nombre*</label>
                                    <input
                                        type="text"
                                        id="username"
                                        value={auth.username}
                                        disabled={true}
                                        className="custom-input"
                                    />
                                </div>
                                <div style={{ flexGrow: 1, marginRight: '12px', display: 'flex', flexDirection: 'column', marginBottom: '40px' }}>
                                    <label htmlFor="lastname" className="custom-label">Apellido*</label>
                                    <input 
                                        type="text"
                                        id="lastname"
                                        value={auth.lastname}
                                        disabled={true}
                                        className="custom-input"
                                    />
                                </div>
                            </div>

                            <div style={{ flexGrow: 1, marginRight: '12px', display: 'flex', flexDirection: 'column', marginBottom: '40px' }}>
                                <label htmlFor="email" className="custom-label">Email*</label>
                                <input
                                    disabled={true}
                                    type="email"
                                    id="email"
                                    value={auth.email}
                                    className="custom-input-email"
                                />
                            </div>
                        </div>
                        <p style={{ color: 'var(--3, #58C1CE)', fontSize: '13px', fontFamily: 'Roboto', }}>*Si necesitas actualizar tus datos, podes hacerlo desde tu perfil.</p>
                    </article>
                    <article style={{ width: '100%' }}>
                        <Divider style={{ color: 'var(--text, #717B8A)', marginBottom: '40px', marginTop: '40px', fontSize: '20px', fontFamily: 'Roboto',fontWeight: 'bold',fontWeight: 500, lineHeight: '31.813px' }}>Detalle de pago</Divider>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <div className="payment-option-tdc"></div>
                            <p className="payment-option-label">Tarjeta de crédito</p>

                            <Checkbox
                                onChange={() => setReservationData({ ...reservationData, medioDePago: 'tdc' })}
                                name="tdc"
                                checked={reservationData.medioDePago === 'tdc' ? true : false}
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 28 },
                                    '&:checked': { color: '#DDE3EB' },
                                    '&:not(:checked)': { color: '#58C1CE' },
                                }} />
                        </div>
                        <Divider style={{ color: 'var(--text, #717B8A)', marginBottom: '40px', marginTop: '40px', lineHeight: '31.813px' }}></Divider>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '16px' }}>                         
                            <div className="payment-option-efectivo"></div>
                            <p className="payment-option-label">Efectivo</p>
                            <Checkbox
                                onChange={() => setReservationData({ ...reservationData, medioDePago: 'efectivo' })}
                                name="efectivo"
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 28 },
                                    '&:checked': { color: '#DDE3EB' },
                                    '&:not(:checked)': { color: '#58C1CE' },

                                }}
                                checked={reservationData?.medioDePago === 'efectivo' ? true : false}
                            />
                        </div>
                        <Divider style={{ color: 'var(--text, #717B8A)', marginBottom: '40px', marginTop: '40px', lineHeight: '31.813px' }}></Divider>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '16px' }}>
                            <div className="payment-option-transferencia"></div>
                            <p className="payment-option-label" >Transferencia</p>
                            <Checkbox
                                onChange={() => setReservationData({ ...reservationData, medioDePago: 'transferencia' })}
                                name="transferencia"
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 28 },
                                    '&:checked': { color: '#DDE3EB' },
                                    '&:not(:checked)': { color: '#58C1CE' },

                                }}
                                checked={reservationData?.medioDePago === 'transferencia' ? true : false}
                            />
                        </div>
                    </article>
                    <article>
                        <Divider style={{ color: 'var(--text, #717B8A)', marginBottom: '40px', marginTop: '40px', fontSize: '20px', fontFamily: 'Roboto',fontWeight: 'bold',fontWeight: 500, lineHeight: '31.813px' }}>Opciones del tour</Divider>
                        <div style={{ display: 'flex' }}>
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel id="demo-simple-select-helper-label" sx={{ fontFamily: 'Roboto', fontSize: '16px', color: 'var(--text, #58C1CE)' }}>Menú *</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={reservationData?.menu}
                                    label="Menú *"
                                    sx={{ fontSize: '17px', fontFamily: 'Roboto', color: 'var(--text, #717B8A)' }}
                                    onChange={(e) => setReservationData({ ...reservationData, menu: e.target.value })}
                                >
                                    <MenuItem sx={{ fontSize: '15px', color: 'var(--text, #717B8A)' }} value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: '15px', color: 'var(--text, #717B8A)' }} value='normal'>Normal</MenuItem>
                                    <MenuItem sx={{ fontSize: '15px', color: 'var(--text, #717B8A)' }} value='vegetariano'>Vegetariano</MenuItem>
                                    <MenuItem sx={{ fontSize: '15px', color: 'var(--text, #717B8A)' }} value='vegano'>Vegano</MenuItem>
                                    <MenuItem sx={{ fontSize: '15px', color: 'var(--text, #717B8A)' }} value='celíaco'>Sin glúten</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel id="demo-simple-select-helper-label" sx={{ fontFamily: 'Roboto', fontSize: '16px', color: 'var(--text, #58C1CE)' }}>Alojamiento *</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={reservationData?.alojamiento}
                                    label="Alojamiento *"
                                    sx={{ fontSize: '17px', fontFamily: 'Roboto', color: 'var(--text, #717B8A)' }}
                                    onChange={(e) => setReservationData({ ...reservationData, alojamiento: e.target.value })}
                                >
                                    <MenuItem sx={{ fontSize: '15px', color: 'var(--text, #717B8A)' }} value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: '15px', color: 'var(--text, #717B8A)' }} value='hostel'>Hostel</MenuItem>
                                    <MenuItem sx={{ fontSize: '15px', color: 'var(--text, #717B8A)' }} value='cabaña'>Cabaña</MenuItem>
                                    <MenuItem sx={{ fontSize: '15px', color: 'var(--text, #717B8A)' }} value='hotel'>Hotel</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </article>
                    <article>
                        <Divider style={{ color: 'var(--text, #717B8A)', marginBottom: '40px', marginTop: '40px', fontSize: '20px', fontFamily: 'Roboto',fontWeight: 'bold',fontWeight: 500, lineHeight: '31.813px' }}>Información de salud</Divider>
                        <p className="custom-paragraph">
                            Si hay aspectos de tu salud que deban ser considerados al realizar o participar del tour, no dudes en decírnoslo.
                        </p>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={6}
                            sx={{ width: '100%', borderRadius: '20px', border: 'none',"& fieldset": { border: 'none' }, background: '#F2FEFE', '.MuiInputBase-input': { fontFamily: 'Roboto', fontSize: '20px', color: 'var(--text, #717B8A)',paddingTop: '10px',} }}
                            onChange={(e) => setReservationData({ ...reservationData, informacionDeSalud: e.target.value })}
                        />

                    </article>
                </section>
                <section style={{ width: '480px', marginLeft: '150px', marginRight: '12%' }}>
                    <article style={{ backgroundColor: '#EEF9FA', padding: '46px', borderRadius: '39px' }}>
                    <p style={{ fontSize: '30px', color: 'var(--text, #58C1CE)', fontFamily: 'Roboto', fontWeight: 'bold', marginBottom: '30px' }}>Tu orden</p>
                    <div style={{ borderRadius: '20px', backgroundColor: 'white', padding: '4px', marginBottom: '38px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', paddingRight: '4px' }}>
                            <div style={{ flex: '1', padding: '10px' }}>
                            <p style={{ fontSize: '24px', marginBottom: '2px', color: 'var(--text, #717B8A)' }}>Total</p>
                            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                <p style={{ fontSize: '14px', marginRight: '6px', marginBottom: 'auto', marginTop: '10px', color: 'var(--text, #717B8A)' }}>USD</p>
                                <p style={{ fontSize: '40px', fontWeight: 'bold', color: 'var(--text, #F2A63B)' }}>{precio}</p>           
                            </div>
                            </div>
                        
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', paddingRight: '4px' }}>
                                <img src={usdImage} alt="USD" style={{ height: '100%', width: '50px' }} />
                            </div>
                        </div>
                    </div>
                        <div>               
                            <p style={{ fontSize: '30px', color: 'var(--text, #58C1CE)', fontFamily: 'Roboto', fontWeight: 'bold', marginBottom: '30px' }}>Fecha del Tour</p>
                            <div style={{ borderRadius: '10px', backgroundColor: 'white', padding: '4px', marginBottom: '38px' }}>
                            <DatePicker
                                multiple
                                value={selectedDates}
                                numberOfMonths={2}
                                minDate={new Date()}
                                mapDays={({ date }) => {
                                    let props = {}
                                    const newDate = new Date(date)
                                    if (selectedDates.length !== 0) {
                                        if (newDate > selectedDates[0] && newDate < selectedDates[1]) {
                                            props.style = { backgroundColor: "#EEF9FA", color: '9ED3D9' }
                                        }
                                    }

                                    if (bussyDates.includes(DateFormater(newDate))) {
                                        props.style = { color: '9ED3D9' }
                                    }

                                    return props
                                }}
                                onChange={(values) => {
                                    let validSelectedDates = []
                                    values.forEach(value => {
                                        let dateValue = new Date(value)
                                        let endDate = new Date(value)
                                        endDate.setDate(endDate.getDate() + (duracion - 1))
                                        let validDateFlag = true;
                                        for (let index = 0; index <= duracion; index++) {
                                            let dateToCheck = dateValue
                                            dateToCheck.setDate(dateToCheck.getDate() + index)

                                            if (bussyDates.includes(DateFormater(dateToCheck))) {
                                                validDateFlag = false;
                                                return ''
                                            }
                                        }

                                        if (validDateFlag && selectedDates.length === 0) {
                                            validSelectedDates.push(value)
                                            validSelectedDates.push(new Date(endDate))
                                        }
                                    })
                                    console.log(validSelectedDates)
                                    setSelectedDates(validSelectedDates)
                                    setReservationData({ ...reservationData, fechaInicio: DateFormater(validSelectedDates[0]) })

                                }}
                                style={{
                                    color: '#05848A',
                                    fontFamily: 'Roboto',
                                    fontSize: '20px',
                                    alignItems: 'flexStart',
                                    width: '100% !important',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    marginTop: '20px',
                                    marginBottom: '20px',
                                }}
                            />
                            </div>
                            <p style={{ color: 'var(--3, #58C1CE)', fontSize: '13px', fontFamily: 'Roboto', marginBottom: '30px' }}>*Estás a tiempo de modificar las fechas seleccionadas. Por favor, checkea que sean las correctas antes de continuar.</p>
                        </div>
                        {tourImage && <img src={tourImage?.url} style={{ borderRadius: '19px', background: 'var(--blanco, #FFF)', boxShadow: '0px 4px 4px 0px #B8CBCC', marginBottom: '50px' }} />}
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
                        onClick={handleReserva}
                        margin={'auto'}
                    />
                    </article>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    
                </section>
            </div>
        </div>
    )
}

export default MakeReservation;