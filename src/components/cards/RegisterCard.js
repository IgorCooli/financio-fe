import React, { useState } from 'react';
import { Navbar, Container, Card, Form, Button } from 'react-bootstrap';

export default function RegisterCard  ()  {
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCVV] = useState('');

    const handleCardRegistration = () => {
        fetch('/api/card-registration', { //add endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cardNumber: cardNumber,
                expirationDate: expirationDate,
                cvv: cvv,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
           
            if (data.success) {
                // Redirecionar para a HomePage
            } else {
                // Registro falhou,  exibir uma mensagem de erro
            }
        })
        .catch((error) => {
           
            console.error('Erro ao registrar cartão:', error);
            // Você pode exibir uma mensagem de erro para o usuário
        });
    
        console.log('Card Registration:', cardNumber, expirationDate, cvv);
    };
    

    return (
        <div>
            <Navbar style={{ backgroundColor: '#159469' }} expand="lg">
                <Navbar.Brand style={{ color: '#E6E6FA', marginLeft: '30px' }}>FinancIO</Navbar.Brand>
            </Navbar>

            <Container className="mt-4">
                <Card>
                    <Card.Header>
                        <h2>Card Registration</h2>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control
                                  className="mb-3"
                                    type="text"
                                    placeholder="Enter card number"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Expiration Date</Form.Label>
                                <Form.Control
                                  className="mb-3"
                                    type="text"
                                    placeholder="MM/YYYY"
                                    value={expirationDate}
                                    onChange={(e) => setExpirationDate(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>CVV</Form.Label>
                                <Form.Control 
                                className="mb-3"
                                    type="text"
                                    placeholder="Enter CVV"
                                    value={cvv}
                                    onChange={(e) => setCVV(e.target.value)}
                                />
                            </Form.Group>

                            <Button 
                                className="mt-3"
                                variant="success"
                                onClick={handleCardRegistration}
                            >
                                Register Card
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

