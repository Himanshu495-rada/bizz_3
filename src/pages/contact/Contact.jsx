import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Lottie from 'react-lottie';
import animationData from '../../assets/contact-us.json';

export default function Contact() {

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
      <h1 className="text-center">Contact us</h1>
      <Row className="align-items-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll contact you soon.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
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
