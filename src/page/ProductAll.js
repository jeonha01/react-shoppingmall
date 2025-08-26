import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import './page.css';
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/reducers/productReducer';

const ProductAll = () => {
    const products = useSelector((state) => state.product.products)
    const [query, setQuery] = useSearchParams();
    let [error, setError] = useState("");
    const dispatch = useDispatch()

    const getProducts = () => {

        let keyword = query.get("q") || "";

        dispatch(fetchProducts(keyword))

    };

    useEffect(() => {
        getProducts();
    }, [query]);
    return (

        <Container className='cards'>
            <h2 className='banner'>Weekly Best</h2>
            <div className="background-image"></div> {/* 배경 이미지 */}
            {error ? (
                <Alert variant="danger" className="text-center">
                    {error}
                </Alert>
            ) : (
                <Row>
                    {products.length > 0 &&
                        products.map((item) => (
                            <Col md={3} sm={12} key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        ))}
                </Row>
            )}
        </Container>
    );
}

export default ProductAll