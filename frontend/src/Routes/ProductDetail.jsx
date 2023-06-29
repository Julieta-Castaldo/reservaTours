import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css'
import { IconCalendar1 } from '../Components/svgs/IconCalendar1';
import { ButtonIcon } from '../Components/molecules/ButtonIcon/ButtonIcon';
import { IconArrowRight2 } from '../Components/svgs/IconArrowRight2';
import { FeatureBlock } from '../Components/organisms/FeatureBlock/FeatureBlock';
import { PicturesSection } from "../Components/sections/PicturesSection/PicturesSection.jsx";
import { ImagesCarousel } from '../Components/organisms/ImagesCarousel/ImagesCarousel';
import MapUbication from '../Components/molecules/LeafletUbication/MapUbication';
import PoliticaBlock from '../Components/organisms/PoliticaBlock/PoliticaBlock';
import ubicationLogo from '../Util/images/ubicationLogo.svg'
import pointsIcon from '../Util/images/pointsIcon.svg';
import { useGlobalState } from '../Context/Context';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-multi-date-picker"

//Helper
import { calculateDistance } from '../Helpers/DistanceCalculator';
import { DateFormater } from '../Helpers/DateFormater';

//Hooks
import { useGetTourBussyDates } from '../Hooks/Tours/useGetTourBussyDates';

const ProductDetail = () => {
    const { id } = useParams()
    const { auth } = useGlobalState()
    const [productData, setProductData] = useState({})
    const url = `http://localhost:8080/Tour/porId/` + id.replace(':', '');
    const [isOpenCarousel, setIsOpenCarousel] = useState(false)
    const { userLocation } = useGlobalState();
    const [tourDistance, setTourDistance] = useState(null)
    const [reservaValues, setReservaValues] = useState({
        tourId: null,
        usuarioId: null,
        fechaInicio: null,
        duracion: null,
        bussyDates: [],
        dates: []
    })
    const { listaImagenes, nombre, descripcion, ciudad, caracteristicasSi, precio, duracion } = productData
    const navigate = useNavigate();
    const [bussyDates, handleGetBussyDates] = useGetTourBussyDates()
    const { searchedDate, setSearchedDate } = useGlobalState()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProductData(data))

    }, [url])

    useEffect(() => {
        if (id) handleGetBussyDates(id.replace(':', ''))
    }, [id])

    useEffect(() => {
        setReservaValues({ ...reservaValues, bussyDates: bussyDates })
    }, [bussyDates])

    useEffect(() => {
        if (ciudad && ciudad.latitud && ciudad.longitud && userLocation) {
            setTourDistance(calculateDistance(ciudad.latitud, ciudad.longitud, userLocation[0], userLocation[1]))
        } else {
            setTourDistance(false)
        }
    }, [ciudad, userLocation])

    useEffect(() => {
        window.scrollTo(0, 0)

        if (auth && auth.id) {
            setReservaValues({ ...reservaValues, usuarioId: auth.id, tourId: id.replace(':', ''), duracion: duracion, tourImage: listaImagenes && listaImagenes[0], precio: precio, tourName: nombre, descripcion: descripcion, ciudad: ciudad })
        }

        if (searchedDate) {
            let validSelectedDates = []
            let dateValue = new Date(searchedDate)
            let endDate = new Date(searchedDate)
            endDate.setDate(endDate.getDate() + (duracion - 1))
            validSelectedDates.push(dateValue)
            let end = new Date(endDate)
            validSelectedDates.push(end.getTime())

            setReservaValues({ ...reservaValues, fechaInicio: [DateFormater(validSelectedDates[0]), DateFormater(validSelectedDates[1])], dates: validSelectedDates })
        }
    }, [auth, productData, searchedDate])

    const handleReserva = () => {
        if (!auth) {
            localStorage.setItem('tourDeInteres', id)
            Swal({
                position: 'top-end',
                icon: 'info',
                title: 'Debes loguearte para reservar un tour',
                showConfirmButton: false,
                timer: 2000
            });
            navigate('/login')
        } else {
            localStorage.setItem('prefilledReservationData', JSON.stringify(reservaValues))
            navigate('/reservation')
            setSearchedDate(null)
        }
    }

    return (
        <div>
            <div>
                <section style={{ padding: '20px 50px' }}>
                    <article className='breadcrumSection'>
                        <Link to='/' style={{ color: '#DDE3EB', marginRight: '12px' }}>Home</Link>
                        <span style={{ color: '#DDE3EB', marginRight: '12px' }}>{'<'}</span>
                        <Link to='/' style={{ fontWeight: 700, color: '#58C1CE' }}>{nombre}</Link>
                    </article>
                    {tourDistance && <div className='distanceAndPointsBanner'>
                        <div style={{ display: 'flex' }}>
                            <img src={ubicationLogo} alt='Digital Booking' />
                            <div style={{ marginLeft: '16px' }}>
                                <p style={{ color: '#595E65', fontSize: '16px', fontWeight: 500 }}>{ciudad.nombreCiudad}</p>
                                <p style={{ color: '#595E65', fontSize: '14px', fontWeight: 300 }}>{`A ${Math.trunc(tourDistance)} km de tu ubicación`}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img className='pointsLogo' src={pointsIcon} alt='Digital Booking' />
                            <p style={{ marginRight: '16px', fontSize: 16, color: '#58C1CE', fontWeight: 700 }}>Muy Bueno</p>
                            <StarIcon sx={{ fontSize: '22px', color: '#FACA0A' }} />
                            <StarIcon sx={{ fontSize: '22px', color: '#FACA0A' }} />
                            <StarIcon sx={{ fontSize: '22px', color: '#FACA0A' }} />
                            <StarIcon sx={{ fontSize: '22px', color: '#FACA0A' }} />
                            <StarBorderIcon sx={{ fontSize: '22px', color: '#DDB614' }} />
                        </div>
                    </div>}
                </section>
                <div className='detailView'>
                    <section>
                        <PicturesSection
                            mainImg={listaImagenes && listaImagenes[0] ? listaImagenes[0].url : 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8e/0a/63/colombia-and-experience.jpg?w=600&h=400&s=1'}
                            imgList={listaImagenes}
                            setIsOpenCarousel={setIsOpenCarousel}
                        />
                        <article className='tourDescription'>
                            <p className='productName'>{nombre}</p>
                            <p className='productDescription'>{descripcion}</p>
                        </article>
                        <FeatureBlock setIsOpenCarousel={setIsOpenCarousel} features={caracteristicasSi} />
                    </section>
                    <section>
                        <article className='productData'>
                            <p style={{ fontWeight: 700, color: '#595E65', fontSize: '14px', marginTop: '10px' }}>Valor total</p>
                            <div className='priceSection'>
                                <p style={{ color: '#717B8A' }}>USD</p>
                                <p style={{ color: '#F2A63B', fontSize: '32px' }}>${precio}</p>
                            </div>
                            <p className='categoriesText'>Fechas disponibles</p>
                            {bussyDates && <div className='inputBox'>
                                <DatePicker
                                    multiple
                                    value={reservaValues.dates}
                                    numberOfMonths={2}
                                    minDate={new Date()}
                                    mapDays={({ date }) => {
                                        let props = {}
                                        const newDate = new Date(date)
                                        if (reservaValues.dates.length !== 0) {
                                            if (newDate > reservaValues.dates[0] && newDate < reservaValues.dates[1]) {
                                                props.style = { backgroundColor: "#0074D9", color: 'white' }
                                            }
                                        }

                                        if (bussyDates.includes(DateFormater(newDate))) {
                                            props.style = { color: 'grey' }
                                        }

                                        return props
                                    }}
                                    onChange={(values) => {
                                        if (!values) {
                                            setReservaValues({ ...reservaValues, fechaInicio: null, dates: [] })
                                        }
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

                                            if (validDateFlag && reservaValues.dates.length === 0) {
                                                validSelectedDates.push(value)
                                                let end = new Date(endDate)
                                                validSelectedDates.push(end.getTime())
                                            } else {
                                                return ''
                                            }
                                        })
                                        setReservaValues({ ...reservaValues, fechaInicio: [DateFormater(validSelectedDates[0]), DateFormater(validSelectedDates[1])], dates: validSelectedDates })
                                    }}
                                    style={{
                                        color: '#05848A',
                                        fontFamily: 'Roboto',
                                        fontSize: '16px',
                                        alignItems: 'flexStart',
                                        width: '240px',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                    }}
                                />
                                <IconCalendar1 color='#58C1CE' size='24' />
                            </div>}
                            {!bussyDates && <p style={{ fontSize: 10, color: 'grey' }}>Cargando fechas disponibles...</p>}
                            {!reservaValues?.fechaInicio && bussyDates && <p style={{ fontSize: 12, color: 'grey', marginTop: 8 }}>Seleccioná la fecha deseada para continuar con la reserva</p>}

                            <div style={{ margin: '16px 0px' }}>
                                <p style={{ color: '#717B8A', fontWeight: 700 }}>Duración del tour:</p>
                                <p style={{ color: '#717B8A' }}>{duracion} días</p>
                            </div>

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
                                disabled={reservaValues.fechaInicio === null}
                            />
                        </article>
                    </section>
                </div>
            </div>
            <MapUbication ciudad={ciudad} userLocation={userLocation} />

            <ImagesCarousel images={listaImagenes} isOpen={isOpenCarousel} onClose={() => setIsOpenCarousel(false)} />
            <PoliticaBlock />
        </div >
    )
}

export default ProductDetail;