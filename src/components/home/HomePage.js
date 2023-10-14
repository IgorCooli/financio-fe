import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const HomePage = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>My App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container">
                {/* Your homepage content */}
            </div>
        </div>
    );
};

export default HomePage;
