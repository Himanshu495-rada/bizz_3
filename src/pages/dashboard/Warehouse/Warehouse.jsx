import React, { useState, useEffect } from 'react'
import PocketBase from 'pocketbase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Row, Col, Container, Card, ListGroup } from 'react-bootstrap';
import './Warehouse.css';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function Warehouse() {

    const profitData = [3500, 4200, 3200, 3800, 3900, 4100, 3800, 4300, 3600, 4000, 3700, 3800, 4200, 3500, 4000, 4100, 3900, 4500, 3800, 4200, 3700, 3900, 3600, 4100, 4000, 3800, 4300, 3600, 4000, 4200];
    const revenuData = [12000, 15000, 11000, 13000, 14000, 14500, 13000, 15500, 12500, 13500, 12800, 13000, 15000, 12000, 13500, 14500, 14000, 16000, 13000, 15000, 12800, 14000, 12500, 14500, 13500, 13000, 15500, 12500, 13500, 15000];
    const financeData = [15000, 20000, 12000, 18000, 16000, 19000, 17000, 21000, 14000, 17000, 15000, 16000, 20000, 14000, 18000, 17000, 16000, 22000, 15000, 19000, 14000, 17000, 13000, 19000, 16000, 15000, 21000, 13000, 16000, 18000];
    const days = Array.from({ length: 30 }, (_, index) => `Day ${index + 1}`);
    const data = {
        labels: days,
        datasets: [
            {
                label: 'Profit',
                data: profitData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
            {
                label: 'Revenue',
                data: revenuData,
                fill: false,
                borderColor: 'rgb(192, 75, 182)',
                tension: 0.1,
            },
            {
                label: 'Finance',
                data: financeData,
                fill: false,
                borderColor: 'rgb(67, 161, 95)',
                tension: 0.1,
            }
        ],
    };
    const options = {
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'Days',
                },
            },
        },
    };

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

                <div className='mt-5' >
                    <Line data={data} options={options} />
                </div>

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
