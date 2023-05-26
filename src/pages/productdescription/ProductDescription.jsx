import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/actions';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import PocketBase from 'pocketbase';

export default function ProductDescription() {
    const pb = new PocketBase(process.env.REACT_APP_URL);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = React.useState({});
    const features = product.features ? product.features.split(';') : [];

    async function getProduct() {
        const record = await pb.collection('products').getOne(id, {
            expand: 'relField1,relField2.subRelField'
        });
        setProduct(record);
    }

    async function buyNow() {
        const product = await pb.collection('products').getOne(id);
        dispatch(addCart(product));
        navigate('/cart');
    }

    async function addToCart() {
        const product = await pb.collection('products').getOne(id);
        dispatch(addCart(product));
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <Container>
            <Row className='mt-4' >
                <Col md={6} className="mb-3">
                    <img src={process.env.REACT_APP_URL + "/api/files/products/" + product.id + "/" + product.image} alt={product.name} className="img-fluid" width="400px" height="400px" />
                </Col>
                <Col md={6} >
                    <h2 >{product.name}</h2>
                    <p>{product.description}</p>
                    <h4>Features</h4>
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <h4  >Price</h4>
                    <p className='ms-3' >₹{product.price}</p>
                    <div className='d-flex flex-column' style={{ width: '200px' }} >
                        <button className="btn btn-outline-secondary" onClick={buyNow} >Buy Now</button>
                        <button className="btn btn-outline-primary mt-3 " onClick={addToCart} >Add to Cart</button>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

