import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';


const ProductDetail = () => {
    let { id } = useParams()
    const [product, setProduct] = useState(null)
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/jeonha01/react-shoppingmall/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        setProduct(data)
    }
    useEffect(() => {
        getProductDetail()
    }, [])
    return <Container>
        <Row>
            <Col className='product-img'>
                <img width='636px' src={product?.img}></img>
            </Col>
            <Col>
                <div>{product?.title}</div>
                <div className='detail-price'>₩ {product?.price}</div>
                <div className='choice'>{product?.choice === true ? "Conscious choice" : ""}</div>
                <Dropdown className='dropdown'>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        사이즈 선택
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">XS</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">S</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">M</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">L</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">XL</Dropdown.Item>
                        <Dropdown.Item href="#/action-6">XXL</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <button className="detail-button">🛒 추가</button>
            </Col>
        </Row>
    </Container>


}

export default ProductDetail