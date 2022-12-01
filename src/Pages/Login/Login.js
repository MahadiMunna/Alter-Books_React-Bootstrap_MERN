import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const {signIn, providerLogin} = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset();
            toast.success('Successfully logged in');
            navigate('/');
            setError('');

        })
            .catch(error =>{
                console.log(error)
                setError(error.message)
            })

    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            toast.success('Successfully logged in');
            navigate('/');
        } )
        .catch(error=>{
            console.log(error)
        })
    }

    return (

        <div style={{width:'22rem'}} className='m-auto mt-5'>
            <h2 className='text-primary text-center mb-5'>Login now!</h2>
            <Form onSubmit={handleSubmit} >
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
                    Login
                </Button>
            </Form>
            <p className='my-4'>Are you new here? <Link to='/register'>Register now!</Link></p>
            <ButtonGroup vertical className='mb-4'>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Login with Google</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;