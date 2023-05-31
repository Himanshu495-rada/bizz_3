import React from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from '../../redux/actions';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import PocketBase from 'pocketbase';

export default function Checkout() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pb = new PocketBase(process.env.REACT_APP_URL);
    const cart = useSelector((state) => state.handleCart);

    const totalPrice = cart.reduce((accumulator, product) => accumulator + product.price, 0);

    async function placeOrder(order) {
        const data = {
            "product_id": order
        };
        await pb.collection('orders').create(data);
    }

    async function pay() {
        try {
            cart.forEach((product) => {
                placeOrder(product.id);
            })
            toast("Order placed successfully 🥳❤️");
            dispatch(resetCart());
            navigate('/');
        } catch (error) {
            toast("Something went wrong 😢");
        }

    }


    return (
        <>
            <div className="container">
                <center>
                    <h2 className="my-3">Checkout</h2>
                </center>
                <Row>
                    <Col>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Card className="my-5">
                                <Card.Header>
                                    <h4>Delivery information</h4>
                                </Card.Header>
                                <Card.Body>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" placeholder="Enter Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" placeholder="Enter Email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" className="form-control" placeholder="Enter Phone" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="address">Address</label>
                                            <textarea className="form-control" rows="3" placeholder="Enter Address"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="payment">Payment</label>
                                            <select className="form-control">
                                                <option>Cash on Delivery</option>
                                                <option>Debit Card</option>
                                                <option>Credit Card</option>
                                                <option>Net Banking</option>
                                                <option>UPI</option>
                                                <option>Paypal</option>
                                                <option>Stripe</option>
                                            </select>
                                        </div>

                                    </form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    {/* display total amount info */}
                    <Col>
                        <center>
                            <Card className="my-5">
                                <Card.Header>
                                    <h4>{cart.length} items</h4>
                                </Card.Header>
                                <Card.Body>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map((product) => (
                                                <tr key={product.id}>
                                                    <td>{product.name}</td>
                                                    <td>₹{product.price.toFixed(2)}</td>
                                                    <td>1</td>
                                                    <td>₹{product.price.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="3">Total</td>
                                                <td>₹{totalPrice.toFixed(2)}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </Card.Body>
                                <Card.Footer>
                                    <button className="btn btn-primary" onClick={pay} >Pay
                                        <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                    </button>
                                </Card.Footer>

                            </Card>
                        </center>
                    </Col>
                </Row>
            </div>
            <ToastContainer />
        </>
    )
}
