import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PocketBase from 'pocketbase';

const ProfilePage = () => {

    const pb = new PocketBase(process.env.REACT_APP_URL);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const data = {
            "id": pb.authStore.model.id,
            "username": pb.authStore.model.username,
            "email": pb.authStore.model.email,
            "name": pb.authStore.model.name,
            "verified": pb.authStore.model.verified,
        }
        setProfile(data);
    }, [pb.authStore.model.id, pb.authStore.model.username, pb.authStore.model.email, pb.authStore.model.name, pb.authStore.model.verified]);

    return (
        <Container className='my-5' >
            <Row>
                <Col>
                    <h1>Profile</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Profile Details</Card.Title>
                            <Card.Text>
                                <strong>Id:</strong> {profile.id}
                                <br />
                                <strong>Username:</strong> {profile.username}
                                <br />
                                <strong>Email:</strong> {profile.email}
                                <br />
                                <strong>Name:</strong> {profile.name}
                                <br />
                                <strong>Verified:</strong> {profile.verified ? 'Yes' : 'No'}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
