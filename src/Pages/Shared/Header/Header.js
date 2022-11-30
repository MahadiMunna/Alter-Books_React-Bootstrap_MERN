import React from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const id=1;
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Alter Books</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='navLink' to="/">Home</Link>
                        <NavDropdown title="Writer" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to={`/writer/${id}`}>Action</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Books Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to={`/categories/${id}`}>Action</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Link className='navLink' to="/">eBooks</Link>
                        <Link className='navLink' to="/">About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;