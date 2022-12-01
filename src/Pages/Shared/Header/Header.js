import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../utilities/logo/logo.png'
import { Link } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [writers, setWriters] = useState([]);
    const [types, setTypes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/writers')
            .then(res => res.json())
            .then(data => {
                setWriters(data)
            })
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/types')
            .then(res => res.json())
            .then(data => {
                setTypes(data)
            })
    }, [])
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Logged Out');
            })
            .catch(() => { })
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <img src={logo} style={{ width: '50px' }} alt="" />
                <Navbar.Brand href="/">Alter Books</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='navLink' to="/">Home</Link>
                        <NavDropdown title="Writers" id="basic-nav-dropdown">
                            {
                                writers.map(writer => <NavDropdown.Item href={`/writers/${writer._id}`}>{writer.writer}</NavDropdown.Item>)
                            }
                        </NavDropdown>
                        <NavDropdown title="Books Categories" id="basic-nav-dropdown">
                            {
                                types.map(type => <NavDropdown.Item href={`/types/${type._id}`}>{type.type}</NavDropdown.Item>)
                            }
                        </NavDropdown>
                        <Link className='navLink' to="/">eBooks</Link>
                        <Link className='navLink me-5' to="/about">About</Link>
                        {
                            user?.uid ?
                                <div className='mt-2'>
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}
                                        title={user?.displayName}

                                    ></Image>
                                    <Link onClick={handleLogOut} className='ms-2 navLink' to='/login'>Log out</Link>
                                </div>
                                :
                                <>
                                    <Link className='navLink' to='/login'>Login</Link>
                                    <Link className='navLink' to='/register'>Register</Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;