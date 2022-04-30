import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './Login.css'
const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('')

    const handelSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,

    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending ] = useSendPasswordResetEmail(auth);
    const resetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
        alert('Sent email')
    }


    const navigate = useNavigate();
    if (user) {
        navigate(from, { replace: true });
    }

    const navigateRegister = () => {
        navigate("/register")
    }

    return (
        <div className='container w-50 mx-auto' >
            <h1 className='text-primary text-center mt-3'>Please  Login</h1>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Genius Car? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={resetPassword} >Reset Password</Link></p>
            <Social></Social>
        </div>
    );
};

export default Login;