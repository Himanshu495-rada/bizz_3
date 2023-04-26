import React from 'react'
import { NavLink } from 'react-router-dom'
import Lottie from 'react-lottie';
import animation from '../../assets/ecommerce-online-banner.json';
import Products from '../products/Products';

import './Home.css'

export default function Home() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <section id='header' className="">
            <div className="container-fluid nav_bg mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>
                                    UNLEASH YOUR SHOPPING DESIRES <br></br>
                                    <strong className="brand-name" style={{ color: "#0000ff" }} >WHERE</strong>
                                    <br></br> SHOPPING IS ALWAYS A PLEASURE
                                </h1>
                                <div className="mt-5">
                                    <center>
                                        <NavLink to="/products" className="btnCheckout"> Check it out</NavLink>
                                    </center>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <Lottie options={defaultOptions} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Products />
        </section>
    )
}
