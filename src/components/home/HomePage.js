import React, { useState } from 'react';
import { Navbar, Nav, Container, Card, Button, Dropdown } from 'react-bootstrap';
import { logout } from '../../service/auth/AuthenticationService';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import RoundButton from '../assets/roundButtons';

const HomePage = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state.username;
 


    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div>
            <Navbar style={{ backgroundColor: '#159469' }} expand="lg">
                <Navbar.Brand style={{ color: '#E6E6FA', marginLeft: '30px' }}>FinancIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link style={{ color: '#E6E6FA' }} href="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link style ={{ color: '#E6E6FA' }} href="/profile">
                            Profile
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <span style={{ color: '#E6E6FA', marginRight: '10px' }}>Welcome, {username}</span>
                <UserIconButton onClick={() => setShowDropdown(!showDropdown)} />
            </Navbar>
            {showDropdown && <UserDropdown handleLogout={handleLogout} />}
            <Container className="mt-4">
                <Card>
                    <Card.Header>
                        <h2>Welcome to Your Homepage</h2>
                    </Card.Header>
                    <Card.Body>
                        <p>This is your custom homepage content. You can add text, images, and other elements here.</p>
                     
                        <div className="buttons-container">
                            <div className="d-flex justify-content-center">
                                <div className="button">
                                    <RoundButton text="Despesas do Mês" iconClass="fas fa-wallet" />
                                </div>
                                <div className="button">
                                    <RoundButton text="Cadastrar Cartão" iconClass="fas fa-credit-card" />
                                </div>
                                <div className="button">
                                    <RoundButton text="Cadastrar nova Compra" iconClass="fas fa-shopping-cart" />
                                </div>
                                <div className="button">
                                    <RoundButton text="Ir para Gráficos" iconClass="fas fa-chart-pie" />
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

const UserIconButton = ({ onClick }) => (
    <Button
        style={{ backgroundColor: '#E6E6FA', color: '#159469', marginLeft: 'auto', marginRight: '30px' }}
        onClick={onClick}
    >
        <i className="fas fa-user-circle" style={{ margin: '2px', color: '#159469' }}></i>
    </Button>
);

const UserDropdown = ({ handleLogout }) => (
    <div style={{ position: 'absolute', right: '0', zIndex: '1000', backgroundColor: '#159469', marginRight: '15px', borderRadius: '5px' }}>
        <Dropdown show align="end">
            <Dropdown.Item href="/profile" style={{ margin: '10px', color: '#E6E6FA' }}>Profile</Dropdown.Item>
            <div style={{ background: 'linear-gradient(100deg, #ffffff, transparent)', height: '1px' }}></div>
            <Dropdown.Item onClick={handleLogout} style={{ margin: '10px', color: '#E6E6FA' }}>Logout</Dropdown.Item>
        </Dropdown>
    </div>
);

export default HomePage;
