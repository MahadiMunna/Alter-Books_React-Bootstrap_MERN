import React, { useContext } from 'react';
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
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Logged Out');
             })
            .catch(() => { })
    }
    const id = 1;
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <img src={logo} style={{width:'50px'}} alt=""/>
                <Navbar.Brand href="/">Alter Books</Navbar.Brand>
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
                        <Link className='navLink' to="/about">About</Link>
                        {
                            user?.uid ?
                            <div className='ms-5 mt-2'>
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