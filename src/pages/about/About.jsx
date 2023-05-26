import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'react-lottie';
import animationData from '../../assets/about_us.json';

export default function About() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Container className="my-4">
      <h1 className="text-center">About</h1>
      <Row className="align-items-center">
        <Col md={6}>
          <p>With digitization of physical markets, there has been a need for integration of multiple industries under one umbrella. We present to you Bizz 3 Solutions. Our mission is to provide you with best solutions that cater to your needs. Bizz 3 is a business aggregator platform wherein a wide range of options are available for buyers and sellers.</p>
        </Col>
        <Col md={6}>
          <Lottie options={defaultOptions}
            height={400}
            width={400}
          />
        </Col>
      </Row>
    </Container>
  )
}
