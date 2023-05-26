import React, { useState, useEffect } from 'react'
import PocketBase from 'pocketbase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Row, Col, Container, Card, ListGroup } from 'react-bootstrap';
import './Warehouse.css';

export default function Warehouse() {

    const pb = new PocketBase(process.env.REACT_APP_URL);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const logout = () => {
        pb.authStore.clear();
        toast("Logged out succesfully 😢");
        navigate('/');
    }

    async function getProducts() {
        const records = await pb.collection('products').getFullList({
            sort: '-created',
        });
        //set 6 products from records to products
        setProducts(records.slice(0, 5));
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container>
            <div className="d-flex justify-content-between mt-4">
                <div></div>
                <h1>Warehouse Dashboard</h1>
                <button className='btn btn-outline-danger' style={{ height: "40px" }} onClick={logout} >Logout</button>
            </div>
            <ToastContainer />

            <Container className='my-5' >
                <Row>
                    <Col lg={4} md={6}>
                        <Card style={{ backgroundColor: '#331EDB', color: 'white' }} className='dCard'  >
                            <Card.Body>
                                <h3>Inventory Status</h3>
                                <ListGroup>
                                    <ListGroup.Item variant="primary" >Total items <b>100</b></ListGroup.Item>
                                    <ListGroup.Item variant="primary" >Out of stock items <b>15</b></ListGroup.Item>
                                    <ListGroup.Item variant="primary" >Low stock items <b>3</b></ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6}>
                        <Card style={{ backgroundColor: '#3399FE', color: 'white' }} className='dCard' >
                            <Card.Body>
                                <h3>Orders to Fulfill</h3>
                                <ListGroup>
                                    <ListGroup.Item variant="primary" >Pending orders <b>7</b></ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6}>
                        <Card style={{ backgroundColor: '#FAB115', color: 'white' }} className='dCard' >
                            <Card.Body>
                                <h3>Returns & Exchanges</h3>
                                <ListGroup>
                                    <ListGroup.Item variant="primary" >Return requests <b>17</b></ListGroup.Item>
                                    <ListGroup.Item variant="primary" >Exchange requests <b>5</b></ListGroup.Item>

                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='my-5' >
                    <Col lg={6}>
                        <div className='border border-dark categoriesList'>
                            <h3>All product categories</h3>
                            <ListGroup>
                                <ListGroup.Item className='categoryItem' >Paint</ListGroup.Item>
                                <ListGroup.Item className='categoryItem' >Clothing</ListGroup.Item>
                                <ListGroup.Item className='categoryItem' >Stationery</ListGroup.Item>
                                <ListGroup.Item className='categoryItem' >Games</ListGroup.Item>
                                <ListGroup.Item className='categoryItem' >Sports</ListGroup.Item>
                                <ListGroup.Item className='categoryItem' >Decor</ListGroup.Item>
                                <ListGroup.Item className='categoryItem' >Electronics</ListGroup.Item>
                                <ListGroup.Item className='categoryItem' >Fitness</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className='border border-dark productsList' >
                            <h3>Top selling products</h3>
                            <ListGroup>
                                {products.map((product, index) => (
                                    <ListGroup.Item key={index} >
                                        < Row >
                                            <img src={process.env.REACT_APP_URL + "/api/files/products/" + product.id + "/" + product.image} alt={product.name} style={{ width: '100px' }} />
                                            <Col>
                                                <h5>{product.name}</h5>
                                                <p>Total Sold: {Math.floor(Math.random() * (50 - 40 + 1) + 40)}</p>
                                            </Col>
                                        </Row>

                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </Col>
                </Row>

                {/* Add more details or components as needed */}
            </Container>

        </Container>

    )
}
