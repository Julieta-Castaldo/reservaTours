import React, { useState, useEffect } from 'react';
import { ToursSection } from "../Components/sections/ToursSection/ToursSection";
import { useParams, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Spinner from '../assets/Spinner/Spinner';
import './CategorySection.css'

const CategorySection = () => {
    const { id } = useParams()
    const categoryId = id && id.replace(':', '')
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([])
    const [categoryName, setCategoryName] = useState('')
    const [loading, setLoading] = useState(false)

    const url = `http://localhost:8080/Tour/pages?page=${currentPage + 1}&size=10&categoryId=${categoryId}`;
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.content)
                setTotalPages(data.totalPages)
                if (data && data[0] && data[0].categoria.nombreCategoria) setCategoryName(data[0].categoria.nombreCategoria)
                setLoading(false)
            })
    }, [url, currentPage])

    return (
        <div style={{ padding: '50px 0' }}>
            {loading && <Spinner />}
            {!loading && <>
                <article className='breadcrumSection' style={{ marginLeft: '50px' }}>
                    <Link to='/' style={{ color: '#DDE3EB', marginRight: '12px' }}>Home</Link>
                    <span style={{ color: '#DDE3EB', marginRight: '12px' }}>{'<'}</span>
                    <Link to='/' style={{ fontWeight: 700, color: '#58C1CE' }}>{categoryName}</Link>
                </article>
                <ToursSection products={products} title={`Resultados de ${categoryName}`} />
            </>}
            <ReactPaginate
                pageCount={totalPages}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={(selectedPage) => setCurrentPage(selectedPage.selected)}
                containerClassName={'pagination'}
                activeClassName={'active'}
                previousLabel='Anterior'
                nextLabel='Siguiente'
            />
        </div>

    )
}

export default CategorySection;