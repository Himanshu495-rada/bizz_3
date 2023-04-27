import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data from '../../components/data';

export default function ProductDescription() {
    const { id } = useParams();
    const product = data.find((item) => item.id === parseInt(id));
    console.log(product);

    return (
        <Container>
            <Row className='mt-4' >
                <Col md={6} className="mb-3">
                    <img src={product.img} alt={product.name} className="img-fluid" width="400px" height="400px" />
                </Col>
                <Col md={6} >
                    <h2 >{product.name}</h2>
                    <p>{product.long_description}</p>
                    <h4>Features</h4>
                    <ul>
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <h4>Price</h4>
                    <p>{product.price}</p>
                    <button className="btn btn-outline-secondary">Buy Now</button>
                </Col>
            </Row>
        </Container>
    );
};

