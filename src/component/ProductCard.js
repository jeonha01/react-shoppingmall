import React from 'react'
import { useNavigate } from 'react-router-dom'
import './component.css';


const ProductCard = ({ item }) => {

    const navigate = useNavigate()
    const showDetail = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='card' onClick={() => showDetail(item.id)}>
            <img src={item?.img} />
            <div className='choice'>{item?.choice === true ? "Conscious choice" : ""}</div>
            <div>{item?.title}</div>
            <div>KRW {item?.price}</div>
            <div className='new'>{item?.new === true ? "신제품" : ""}</div>
        </div>
    )
}

export default ProductCard