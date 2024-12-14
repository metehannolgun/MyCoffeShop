import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBarPanel.css'; // Import the CSS file

function NavBarPanel() {
    return (
        <Navbar expand="lg" className="navbar-custom">
            <Container fluid>
                {/* "Coffee Shop" başlığına tıklandığında anasayfaya yönlendirme */}
                <Navbar.Brand to="/" as={Link}>
                    My Coffee Shop
                </Navbar.Brand>

                <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item to="/dashboard/hot" as={Link} href="#action/3.1">Hot</NavDropdown.Item>
                    <NavDropdown.Item to="/dashboard/ice" as={Link} href="#action/3.2">
                        Iced
                    </NavDropdown.Item>
                </NavDropdown>

                <Navbar.Toggle />
            </Container>
        </Navbar>
    );
}

export default NavBarPanel;
