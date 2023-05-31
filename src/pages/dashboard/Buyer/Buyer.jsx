import React, { useEffect, useState } from 'react'
import PocketBase from 'pocketbase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Row, Col, Container, Card, ListGroup } from 'react-bootstrap';

export default function Buyer() {

    const pb = new PocketBase(process.env.REACT_APP_URL);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const logout = () => {
        pb.authStore.clear();
        toast("Logged out succesfully 😢");
        navigate('/');
    }

    async function getProduct(id) {
        const record = await pb.collection('products').getOne(id);
        return record;
    }

    async function getProducts() {
        const records = await pb.collection('orders').getFullList({
            sort: '-created',
        });
        records.forEach(async (record) => {
            const product = await getProduct(record.product_id);
            setProducts((products) => [...products, product]);
        })
    }

    useEffect(() => {
        getProducts();
        console.log(products);
    }, []);

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div></div>
                <h1>Buyer Dashboard</h1>
            </div>
            <div>
                <h3>Your Orders</h3>
                <div className='productsList' >
                    <ListGroup>
                        {products.map((product, index) => (
                            <ListGroup.Item key={index} >
                                < Row >
                                    <img src={process.env.REACT_APP_URL + "/api/files/products/" + product.id + "/" + product.image} alt={product.name} style={{ width: '100px' }} />
                                    <Col>
                                        <h5>{product.name}</h5>
                                        <p>Status: Completed</p>
                                    </Col>
                                </Row>

                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
