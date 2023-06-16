import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css'
import { IconCalendar1 } from '../Components/svgs/IconCalendar1';
import { IconUser } from '../Components/svgs/IconUser';
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
//Helper
import { calculateDistance } from '../Helpers/DistanceCalculator';
import DatePicker from "react-multi-date-picker"
import { DateObject } from "react-multi-date-picker";

const ProductDetail = () => {
    const { id } = useParams()
    const [productData, setProductData] = useState({})
    const url = `http://localhost:8080/Tour/porId/` + id.replace(':', '');
    const [isOpenCarousel, setIsOpenCarousel] = useState(false)
    const { userLocation } = useGlobalState();
    const [tourDistance, setTourDistance] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProductData(data))

    }, [url])

    const { listaImagenes, nombre, descripcion, ciudad } = productData

    useEffect(() => {
        if (ciudad && ciudad.latitud && ciudad.longitud && userLocation) {
            setTourDistance(calculateDistance(ciudad.latitud, userLocation[0], ciudad.longitud, userLocation[1]))
        } else {
            setTourDistance(false)
        }
    }, [ciudad, userLocation])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [selectedDates, setSelectedDates] = useState([])


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
                        <FeatureBlock setIsOpenCarousel={setIsOpenCarousel} />
                    </section>
                    <section>
                        <article className='productData'>
                            <p style={{ fontWeight: 700, color: '#595E65', fontSize: '14px', marginTop: '10px' }}>Valor total</p>
                            <div className='priceSection'>
                                <p style={{ color: '#717B8A' }}>USD</p>
                                <p style={{ color: '#F2A63B', fontSize: '32px' }}>$2500</p>
                            </div>
                            <p className='categoriesText'>Fecha</p>
                            <div className='inputBox'>
                                <DatePicker
                                    multiple
                                    value={selectedDates}
                                    numberOfMonths={2}
                                    minDate={new Date()}
                                    mapDays={({ date }) => {
                                        let props = {}
                                        const newDate = new Date(date)
                                        if (newDate.getDate() > 20 && newDate.getDate() < 26) {
                                            props.style = { color: "#8798AD" }
                                        } else return ''

                                        return props
                                    }}
                                    onChange={(values) => {
                                        let validSelectedDates = []
                                        values.forEach(value => {
                                            let dateValue = new Date(value)
                                            if (dateValue.getDate() > 20 && dateValue.getDate() < 26) {

                                            } else {
                                                validSelectedDates.push(value)
                                            }
                                        })
                                        setSelectedDates(validSelectedDates)
                                    }}
                                    style={{
                                        color: '#05848A',
                                        fontFamily: 'Roboto',
                                        fontSize: '16px',
                                        alignItems: 'flexStart',
                                        width: '240px',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        // Agrega más estilos según sea necesario
                                    }}
                                />
                                <IconCalendar1 color='#58C1CE' size='24' />
                            </div>
                            <p className='categoriesText'>Viajeros</p>
                            <div className='inputBox'>
                                <IconUser color='#58C1CE' />
                            </div>
                            <div style={{ margin: '16px 0px' }}>
                                <p style={{ color: '#717B8A' }}>10:00 AM</p>
                                <p style={{ color: '#717B8A' }}>Hora de inicio</p>
                            </div>
                            <ButtonIcon
                                text='Proceder a reservar'
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