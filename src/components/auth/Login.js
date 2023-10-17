import React, { useState } from 'react';
import { Form, Button, Alert, Col, Row, InputGroup } from 'react-bootstrap';
import { authenticate } from '../../service/auth/AuthenticationService';
import { useNavigate } from 'react-router-dom';
import '../../index.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const login = async () => {
        try {
            await authenticate(username, password);
            navigate('/home', { state: { username: username } });
        } catch (error) {
            setShowAlert(true);
        }
    };

    const signUp = () => {
        navigate('/register');
    };

    const leftColumnStyle = {
        backgroundColor: '#E6E6FA',
        width: '70%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const formStyle = {
        color: '#469867',
        width: '70%',
    };

    const rightColumnStyle = {
        backgroundColor: '#469867',
        width: '30%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const signUpMsg = {
        color: '#E6E6FA',
        margin: '5%',
        justifyContent: 'center',
    };

    const registerButtonStyle = {
        backgroundColor: '#E6E6FA',
        color: '#469867',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        marginLeft: '25%',
        width: '50%',
    };

    const signInButtonStyle = {
        backgroundColor: '#469867',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        margin: '5px',
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={leftColumnStyle}>
                <div className="text-center mb-4" style={{ color: '#469867' }}>
                    <h1>Login</h1>
                </div>
                <Form style={formStyle}>
                    <Form.Group controlId="username" style={{ margin: '10px' }}>
                        <Form.Label>Username (Email)</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </InputGroup>
                        <Form.Text className="text-muted">
                            Please enter your email address as the username.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="password" style={{ margin: '10px' }}>
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                variant="secondary"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputGroup>
                    </Form.Group>
                    {showAlert && (
                        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                            Wrong Credentials
                        </Alert>
                    )}
                </Form>
                <Button style={signInButtonStyle} variant="success" type="button" onClick={login}>
                    Sign In
                </Button>
            </div>
            <div style={rightColumnStyle}>
                <Col>
                    <Row>
                        <h2 style={signUpMsg}>New Here?</h2>
                    </Row>
                    <Row>
                        <h3 style={signUpMsg}>Sign up and discover a great amount of new opportunities</h3>
                    </Row>
                    <Row>
                        <Button
                            style={registerButtonStyle}
                            variant="warning"
                            type="button"
                            onClick={signUp}
                        >
                            Sign Up
                        </Button>
                    </Row>
                </Col>
            </div>
        </div>
    );
};

export default Login;
