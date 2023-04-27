import React from 'react'
import { NavLink } from 'react-router-dom'
import Lottie from 'react-lottie';
import animation from '../../assets/ecommerce-online-banner.json';
import Products from '../products/Products';
import { Carousel } from 'react-bootstrap';
import c1 from '../../assets/c 1.svg';
import c2 from '../../assets/c 2.svg';
import c3 from '../../assets/c 3.svg';
import c4 from '../../assets/c 4.jpg';
import c5 from '../../assets/c 5.jpeg';
import c6 from '../../assets/c 6.jpg';

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
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c4}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c5}
                            alt="Fifth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c6}
                            alt="Sixth slide"
                        />
                    </Carousel.Item> */}
                </Carousel>
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
