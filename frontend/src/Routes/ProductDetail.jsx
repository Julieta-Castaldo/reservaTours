import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css'
import { IconCalendar1 } from '../Components/svgs/IconCalendar1';
import { IconUser } from '../Components/svgs/IconUser';
import { ButtonIcon } from '../Components/molecules/ButtonIcon/ButtonIcon';
import { IconArrowRight2 } from '../Components/svgs/IconArrowRight2';

const ProductDetail = () => {
  const { id } = useParams()
  const [productData, setProductData] = useState({})
  const url = `http://localhost:8080/Tour/porId/` + id.replace(':', '');

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProductData(data))

  }, [url])

  const { listaImagenes, nombre, descripcion } = productData

  return (
    <div className='detailView'>
      <section>
        <article className='breadcrumSection'>
          <Link to='/' style={{ color: '#DDE3EB', marginRight: '12px' }}>Home</Link>
          <span style={{ color: '#DDE3EB', marginRight: '12px'}}>{'<'}</span>
          <Link to='/' style={{ fontWeight: 700, color: '#58C1CE' }}>{nombre}</Link>
        </article>
        <article className='imagesSection'>
          <div>
            <img className='mainImage' src={listaImagenes && listaImagenes[0] ? listaImagenes[0].url : 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8e/0a/63/colombia-and-experience.jpg?w=600&h=400&s=1'} />
            <div className='secondaryImagesSection'>
              {listaImagenes && listaImagenes.length !== 1 && listaImagenes.map((item, idx) => {
                if (idx !== 0) {
                  return (
                    <img className='secondaryImages' key={idx} src={`${item.url}`} />
                  )
                }
              })}
            </div>

          </div>
        </article>
        <article className='tourDescription'>
          <p className='productName'>{nombre}</p>
          <p className='productDescription'>{descripcion}</p>
        </article>
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
            <IconCalendar1 color='#58C1CE' size='20' />
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
  )
}

export default ProductDetail;