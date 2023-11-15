import React from 'react';
import Nav from 'react-bootstrap/Nav'
const NavLink = () => {
    return (
        <div>
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </div>
    );
};

export default NavLink;