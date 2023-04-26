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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl et aliquam semper, velit quam euismod magna, quis faucibus sapien lacus sit amet nisi. Nam imperdiet faucibus ex. Sed vitae neque quis odio bibendum malesuada.</p>
          <p>Nulla facilisi. Vestibulum non sapien ut tortor cursus venenatis ut vel quam. Morbi bibendum justo at lectus aliquet, nec molestie massa volutpat.</p>
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
