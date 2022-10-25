import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [error,setError] = useState('')
    const {providerLogin,singIn}= useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = ()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
    }
    const handleSUbmit = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      
      singIn(email,password)
      .then(result=>{
        const user = result.user;
        console.log(user)
        setError('')
        form.reset()
      })
      .catch(error=>{
        console.error(error)
        setError(error.message)
      })
    }


    return (
        <div onSubmit={handleSUbmit} className='form-details' >
            <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <span>If you haven't Register, <Link to ='/register'>Register first</Link></span>
      <Form.Text className="text-muted">
          {error}
        </Form.Text>
    </Form>
            <button onClick={handleGoogleSignIn}>google</button>
        </div>
    );
};

export default Login;