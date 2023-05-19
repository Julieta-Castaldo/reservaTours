import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import { IconCalendar1 } from '../Components/svgs/IconCalendar1';
import { IconUser } from '../Components/svgs/IconUser';

const ProductDetail = () => {
  const { id } = useParams()
  const [productData, setProductData] = useState({})
  const url = `http://localhost:8080/Tour/porId/` + id.replace(':', '');

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProductData(data))

  }, [url])

  console.log(productData)
  const { listaImagenes, nombre, descripcion } = productData

  return (
    <div className='detailView'>
      <section>
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
            <IconCalendar1/>
          </div>
          <p className='categoriesText'>Viajeros</p>
          <div className='inputBox'></div>
        </article>
      </section>
    </div>
  )
}

export default ProductDetail;