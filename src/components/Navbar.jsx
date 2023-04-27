import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { Modal, Button, Form, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faCartShopping, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import PocketBase from 'pocketbase';
import { ToastContainer, toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';

export default function Navbar() {

    //const pb = new PocketBase(process.env.REACT_APP_URL);

    const cart = useSelector(state => state.handleCart);
    const compare = useSelector(state => state.handleCompare);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');

    const [show, setShow] = useState(false);
    const handleshow = () => setShow(true);
    const handleshowhide = () => setShow(false);

    const [show2, setShow2] = useState(false);
    const handleshow2 = () => setShow2(true);
    const handleshow2hide = () => setShow2(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    async function login() {
        // await pb.collection('users').authWithPassword(
        //     email,
        //     password,
        // );

        // if (pb.authStore.isValid) {
        //     toast("Logged in succesfully 🥳");
        // }
        toast("Not able to log in 😒");
    }

    const handleSignup = () => {
        handleshowhide();
        handleshow2();
    }

    const handleSubmit = () => {
        console.log('a');
    }

    useEffect(() => {
        // if (pb.authStore.isValid) {
        //     toast("Logged in succesfully 🥳");
        // }
    }, [])

    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">
                                    <h1 className="logo" style={{ color: "#eb763f" }} >Bizz<span style={{ color: "#000" }}> 3</span></h1>
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeclassname="menu_active" className="nav-link " to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeclassname="menu_active" className="nav-link" to="/products">Products</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeclassname="menu_active" className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeclassname="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                    <div className="buttons text-center">
                                        <div className="btn btn-outline-secondary m-2" onClick={handleshow} >
                                            <FontAwesomeIcon icon={faRightToBracket} />
                                            Login
                                        </div>
                                        <NavLink to="/cart" className="btn btn-outline-primary m-2">
                                            <FontAwesomeIcon icon={faCartShopping} />
                                            Cart {cart.length}
                                        </NavLink>
                                        <NavLink to="/compare" className="btn btn-outline-success m-2">
                                            <FontAwesomeIcon icon={faCodeCompare} />
                                            Compare {compare.length}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleshowhide}>
                <Modal.Header closeButton>
                    <Modal.Title>Login to manage your account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={login} className='mt-3' >
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Email address
                                <Form.Label style={{ color: 'red' }} >*</Form.Label>
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className='mt-3' >
                            <Form.Label>Password
                                <Form.Label style={{ color: 'red' }} >*</Form.Label>
                            </Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ width: '100%' }} className='mt-3'>
                            Login
                        </Button>

                        <div className='text-center mt-3' >
                            OR
                        </div>

                        <center>
                            Don't have an account? <a className='primary' onClick={handleSignup} >Sign up here.</a>
                        </center>


                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={show2} onHide={handleshow2hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} className='mt-3'>
                        <Form.Group controlId="email">
                            <Form.Label>Email address
                                <Form.Label style={{ color: 'red' }} >*</Form.Label>
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={signupEmail}
                                onChange={(e) => setSignupEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="password" className='mt-3' >
                            <Form.Label>Password
                                <Form.Label style={{ color: 'red' }} >*</Form.Label>
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={signupPassword}
                                onChange={(e) => setSignupPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ width: '100%' }} className='mt-3' >
                            Sign up
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <ToastContainer />
        </>
    )
}
