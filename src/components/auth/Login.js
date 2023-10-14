import {React, useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { authenticate } from '../../service/auth/AuthenticationService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const token = await authenticate(username, password);
            // Handle a successful login
        } catch (error) {
            // Handle login error
        }
    };

    const containerStyle = {
        backgroundColor: 'white'
    };

    return (
        <Container style={containerStyle}>
            <Row className="justify-content-center align-items-center min-vh-100">
                <Col xs={12} md={6}>
                    <div className="text-center mb-4">
                        <h1 style={{ color: 'purple' }}>Login</h1>
                    </div>
                    <Form>
                        <Form.Group controlId="username" style={{ margin: '10px' }}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="password" style={{ margin: '10px' }}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Row style={{ justifyContent: 'center', textAlign: 'center', margin: '15px' }}>
                            <Col xs="auto">
                                <Button variant="success" type="button" onClick={login}>
                                    Sign In
                                </Button>
                            </Col>
                            <Col xs="auto">
                                <Button variant="warning" type="button">
                                    Register
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
