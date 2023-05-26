import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer(props) {
    return (
        <footer className='text-center text-lg-start text-muted' >
            <section className='d-flex justify-content-center border-top' >
                <Container className='text-center text-md-start mt-5'>
                    <Row className='mt-3'>
                        <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                {/* <Icon icon="gem" className="me-3" /> */}
                                Bizz 3
                            </h6>
                            <p>
                                Our mission is to provide you with best solutions that cater to your needs. Bizz 3 is a business aggregator platform wherein a wide range of options are available for buyers and sellers.
                            </p>
                        </Col>

                        <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Social Media</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </p>

                            <p>
                                <a href='#!' className='text-reset'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </p>

                            <p>
                                <a href='#!' className='text-reset'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </p>
                        </Col>

                        <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <NavLink to='/products' className='text-reset'>
                                    Products
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/cart' className='text-reset'>
                                    Cart
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/about' className='text-reset'>
                                    About
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/contact' className='text-reset'>
                                    Contact
                                </NavLink>
                            </p>
                        </Col>

                        <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <FontAwesomeIcon icon={faHome} className='me-3' />
                                Pune, Maharashtra, India
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} className='me-3' />
                                admin@gmail.com
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} className='me-3' /> +91 888888888
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </footer>
    );
}

export default Footer;