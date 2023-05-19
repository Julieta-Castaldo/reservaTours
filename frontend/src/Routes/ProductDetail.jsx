import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams()
  const [productData, setProductData] = useState({})
  const url = `http://localhost:8080/Tour/porId/` + id.replace(':', '');

  useEffect(() => {
    fetch(url, {
      method: "GET",
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => setProductData(data))

  }, [id])

  return (
    <p>Hola detail</p>
  )
}

export default ProductDetail;