import React, { useState } from 'react';
import { Form, Button, Container, InputGroup, Row, Modal } from 'react-bootstrap';
import { register } from '../../service/registeruser/RegisterService';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        lastName: '',
        phoneNumber: '',
        monthlyRevenue: 'R$',
    });
    

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [blankFieldsList, setBlankFieldsList] = useState([]);

    const handleShowAlert = () => setShowAlert(true);
    const handleCloseAlert = () => setShowAlert(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleMoneyInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: formatMoneyValue(value),
        });
    };

    const handlePhoneInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: formatPhoneNumber(value),
        });
    };

    const formatMoneyValue = (value) => {
        const numericValue = value.replace(/[^\d]/g, '');

        if (numericValue.length >= 3) {
            const wholePart = numericValue.slice(0, -2);
            const decimalPart = numericValue.slice(-2);
            const formattedValue = `R$${wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')},${decimalPart}`;
            return formattedValue;
        } else {
            return value;
        }
    };

    const formatPhoneNumber = (phoneNumber) => {
        const numericValue = phoneNumber.replace(/[^\d]/g, '');

        if (numericValue.length <= 2) {
            return `(${numericValue}`;
        } else if (numericValue.length <= 6) {
            const areaCode = numericValue.slice(0, 2);
            const firstPart = numericValue.slice(2, 6);
            return `(${areaCode}) ${firstPart}`;
        } else {
            const areaCode = numericValue.slice(0, 2);
            const firstPart = numericValue.slice(2, 7);
            const secondPart = numericValue.slice(7, 11);
            return `(${areaCode}) ${firstPart}-${secondPart}`;
        }
    };

    const handleRegister = () => {
        const blankFields = [];

        if (!formData.username) {
            blankFields.push('Username');
        }
        if (!formData.password) {
            blankFields.push('Password');
        }
        if (!formData.confirmPassword) {
            blankFields.push('Confirm Password');
        }
        if (!formData.name) {
            blankFields.push('Name');
        }
        if (!formData.lastName) {
            blankFields.push('Last Name');
        }
        if (!formData.phoneNumber) {
            blankFields.push('Phone Number');
        }

        const moneyValue = parseFloat(formData.monthlyRevenue.replace(/[^\d,]/g, '').replace(',', '.').replace('R$', ''));

        if (
            blankFields.length > 0 ||
            !isValidEmail(formData.username) ||
            !isValidPhoneNumber(formData.phoneNumber) ||
            formData.password !== formData.confirmPassword ||
            isNaN(moneyValue)
        ) {
            showAlertModal('Please fill in all fields correctly', blankFields);
            return;
        }

        register({
            ...formData,
            monthlyRevenue: moneyValue,
        })
            .then((response) => {
                console.log('Registration successful', response);
                navigate('/');
            })
            .catch((error) => {
                console.error('Registration failed', error);
            });
    };

    const isValidEmail = (email) => {
        // Validating the username (email) field using a regex pattern
        const emailPattern = /\S+@\S+\.\S+/;
        return emailPattern.test(email);
    };

    const isValidPhoneNumber = (phoneNumber) => {
        const phonePattern = /^\(\d{2}\)\s\d{5}-\d{4}$/;
        return phonePattern.test(phoneNumber);
    };

    const containerStyle = {
        backgroundColor: '#469867',
        width: '100%',
        height: '110%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
        padding: '0',
    };

    const registerFormStyle = {
        width: '50%',
        padding: '10px',
        color: '#E6E6FA',
    };

    const registerButtonStyle = {
        backgroundColor: '#E6E6FA',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        width: '50%',
        margin: '15px',
    };

    const showAlertModal = (message, fields) => {
        setAlertMessage(message);
        setBlankFieldsList(fields);
        handleShowAlert();
    };

    return (
        <Container fluid className="p-0 m-0 vh-100">
            <div style={containerStyle}>
                <Form style={registerFormStyle}>
                    <h2 className="mb-4" style={{ paddingTop: '20px', paddingBottom: '1px' }}>Sign up</h2>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="email"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <Form.Text className="text-muted">
                            Please enter your email address as the username.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <Button
                                variant="secondary"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type={showPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <Button
                                variant="secondary"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handlePhoneInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formMonthlyRevenue">
                        <Form.Label>Monthly Revenue</Form.Label>
                        <Form.Control
                            type="text"
                            name="monthlyRevenue"
                            value={formData.monthlyRevenue}
                            onChange={handleMoneyInputChange}
                            required
                        />
                    </Form.Group>
                    <Row className="justify-content-center">
                        <Button
                            style={registerButtonStyle}
                            variant="warning"
                            type="button"
                            onClick={handleRegister}
                        >
                            Register
                        </Button>
                    </Row>
                </Form>
            </div>
            <Modal show={showAlert} onHide={handleCloseAlert}>
                <Modal.Header closeButton className="bg-grey">
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {alertMessage}
                    {blankFieldsList.length > 0 && (
                        <div>
                            <p>The following fields are blank:</p>
                            <ul>
                                {blankFieldsList.map((field, index) => (
                                    <li key={index}>{field}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseAlert}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default RegisterPage;
