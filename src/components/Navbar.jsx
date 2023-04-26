import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faCartShopping, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';

export default function Navbar() {

    const cart = useSelector(state => state.handleCart);
    const compare = useSelector(state => state.handleCompare);
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
                                        <NavLink to="/login" className="btn btn-outline-secondary m-2">
                                            <FontAwesomeIcon icon={faRightToBracket} />
                                            Login
                                        </NavLink>
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
        </>
    )
}
