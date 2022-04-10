import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const MyNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Amikuto</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/works">My works</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;