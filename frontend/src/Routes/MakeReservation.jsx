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
    const { usuarioId, fechaInicio, tourId, tourImage, precio, bussyDates, dates } = prefilledData
    const [handlePostReserva] = usePostReserva()

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!auth && tourId) navigate(`/tour/:${tourId}`)
        else if (!auth) navigate('/')
    }, [])

    useEffect(() => {
        setReservationData({ ...reservationData, tourId: Number(tourId), usuarioId: usuarioId, fechaInicio: fechaInicio[0] })
        setSelectedDates(dates)
    }, [prefilledData])

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
                                        type="text"
                                        id="username"
                                        value={auth.username}
                                        disabled={true}
                                    />
                                </div>
                                <div style={{ marginRight: '12px', width: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <label htmlFor="lastname">Apellido*</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        value={auth.lastname}
                                        disabled={true}
                                    />
                                </div>
                            </div>

                            <div style={{ margin: '16px 0', display: 'flex', flexDirection: 'column' }}>
                                <label htmlFor="email">Email*</label>
                                <input
                                    disabled={true}
                                    type="email"
                                    id="email"
                                    value={auth.email}
                                />
                            </div>
                        </div>
                        <p style={{ color: 'grey' }}>*Si necesitas actualizar tus datos, podes hacerlo desde tu perfil</p>
                    </article>
                    <article style={{ width: '100%' }}>
                        <Divider>Detalle de pago</Divider>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <div style={{ width: '110px', height: '62px', backgroundColor: 'lightblue' }}></div>
                            <p>TDC</p>
                            <Checkbox
                                onChange={() => setReservationData({ ...reservationData, medioDePago: 'tdc' })}
                                name="tdc"
                                checked={reservationData.medioDePago === 'tdc' ? true : false}
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 24 },
                                }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '16px' }}>
                            <div style={{ width: '110px', height: '62px', backgroundColor: 'lightblue' }}></div>
                            <p>Efectivo</p>
                            <Checkbox
                                onChange={() => setReservationData({ ...reservationData, medioDePago: 'efectivo' })}
                                name="efectivo"
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 24 },
                                }}
                                checked={reservationData?.medioDePago === 'efectivo' ? true : false}
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '16px' }}>
                            <div style={{ width: '110px', height: '62px', backgroundColor: 'lightblue' }}></div>
                            <p>Transferencia</p>
                            <Checkbox
                                onChange={() => setReservationData({ ...reservationData, medioDePago: 'transferencia' })}
                                name="transferencia"
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 24 },
                                }}
                                checked={reservationData?.medioDePago === 'transferencia' ? true : false}
                            />
                        </div>
                    </article>
                    <article>
                        <Divider>Opciones del tour</Divider>
                        <div style={{ display: 'flex' }}>
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel id="demo-simple-select-helper-label" sx={{ fontSize: '16px' }}>Menú *</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={reservationData?.menu}
                                    label="Menú *"
                                    sx={{ fontSize: '16px' }}
                                    onChange={(e) => setReservationData({ ...reservationData, menu: e.target.value })}
                                >
                                    <MenuItem sx={{ fontSize: '14px' }} value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: '14px' }} value='normal'>Normal</MenuItem>
                                    <MenuItem sx={{ fontSize: '14px' }} value='vegetariano'>Vegetariano</MenuItem>
                                    <MenuItem sx={{ fontSize: '14px' }} value='vegano'>Vegano</MenuItem>
                                    <MenuItem sx={{ fontSize: '14px' }} value='celíaco'>Sin glúten</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel id="demo-simple-select-helper-label" sx={{ fontSize: '16px' }}>Alojamiento *</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={reservationData?.alojamiento}
                                    label="Alojamiento *"
                                    sx={{ fontSize: '16px' }}
                                    onChange={(e) => setReservationData({ ...reservationData, alojamiento: e.target.value })}
                                >
                                    <MenuItem sx={{ fontSize: '14px' }} value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem sx={{ fontSize: '14px' }} value='hostel'>Hostel</MenuItem>
                                    <MenuItem sx={{ fontSize: '14px' }} value='cabaña'>Cabaña</MenuItem>
                                    <MenuItem sx={{ fontSize: '14px' }} value='hotel'>Hotel</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </article>
                    <article>
                        <Divider>Información de salud</Divider>
                        <p>
                            Si hay aspectos de tu salud que deban ser considerados al realizar o participar del tour, no dudes en decírnoslo.
                        </p>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={6}
                            sx={{ width: '100%' }}
                            onChange={(e) => setReservationData({ ...reservationData, informacionDeSalud: e.target.value })}
                        />

                    </article>
                </section>
                <section style={{ width: '40%', marginLeft: '24px' }}>
                    <article style={{ backgroundColor: '#EEF9FA', padding: '16px' }}>
                        <p>Tu orden</p>
                        <div style={{ borderRadius: '20px', backgroundColor: 'white', padding: '16px' }}>
                            <p>Total</p>
                            <p>USD {precio}</p>
                        </div>
                        <div>
                            <p>Fecha del Tour</p>
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
                                            props.style = { backgroundColor: "#0074D9", color: 'white' }
                                        }
                                    }

                                    if (bussyDates.includes(DateFormater(newDate))) {
                                        props.style = { color: 'grey' }
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
                                        } else {
                                            return ''
                                        }
                                    })
                                    setSelectedDates(validSelectedDates)
                                    setReservationData({ ...reservationData, fechaInicio: DateFormater(validSelectedDates[0]) })
                                }}
                                style={{
                                    color: '#05848A',
                                    fontFamily: 'Roboto',
                                    fontSize: '16px',
                                    alignItems: 'flexStart',
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                            <p style={{ color: 'grey', fontSize: '12px'}}>*Estás a tiempo de modificar las fechas seleccionadas. Por favor, checkea que sean las correctas antes de continuar</p>
                        </div>
                        {tourImage && <img src={tourImage?.url} />}
                    </article>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
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
                    />
                </section>
            </div>
        </div>
    )
}

export default MakeReservation;