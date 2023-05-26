import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { delCompare } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

export default function Compare() {

    const products = useSelector(state => state.handleCompare);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const features = products.map((product) => product.features.split(';'));

    function handleProductDescription(id) {
        navigate(`/productdescription/${id}`);
    }

    return (
        <>
            {
                products.length > 0 ? (
                    <Container>
                        <Row>
                            <Col>
                                <Table responsive bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            {products.map((product) => (
                                                <th key={product.id}>{product.name}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Image</td>
                                            {products.map((product) => (
                                                <td key={product.id}>
                                                    <center>
                                                        <img src={process.env.REACT_APP_URL + "/api/files/products/" + product.id + "/" + product.image} alt={product.name} width="200px" height="200px" onClick={() => handleProductDescription(product.id)} />
                                                    </center>
                                                </td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            {products.map((product) => (
                                                <td key={product.id}>₹{product.price}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            {products.map((product) => (
                                                <td key={product.id}>{product.description}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td>Features</td>
                                            {products.map((product) => (
                                                <td key={product.id}>
                                                    <ul>
                                                        {features.map((feature, index) => (
                                                            <li key={index}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                </td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td>Remove</td>
                                            {products.map((product) => (
                                                <td>
                                                    <center>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => dispatch(delCompare(product))}
                                                        >
                                                            Remove
                                                        </button>
                                                    </center>
                                                </td>
                                            ))}
                                        </tr>

                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <center className='my-5' >
                        <h4>No products added to compare.</h4>
                    </center>
                )
            }
        </>
    );
};

