import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,img,email,password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
                handleProfile(name,img)
                form.reset();
               
            })
            .catch(error => {
                console.log(error)
                setError(error)
            })

    }
    const handleProfile = (name, img) => {
        const profile = {
            displayName: name,
            photoURL: img
        }
        updateUser(profile)
            .then(() => { })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div style={{width:'22rem'}} className='m-auto mt-5'>
            <h2 className='text-primary text-center mb-5'>Register now!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo url" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>

                <Button className='d-block mt-3' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='my-4'>Already have an account? <Link to='/login'>Login now!</Link></p>
        </div>
    );
};

export default Register;