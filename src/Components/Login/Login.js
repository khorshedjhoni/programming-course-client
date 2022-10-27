import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle,  } from 'react-icons/fa';



const Login = () => {
  const [error,setError] = useState('')
  const navigate = useNavigate()
    const {providerLogin,singIn,gitLogin}= useContext(AuthContext);
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()

    const handleGoogleSignIn = ()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
    }

    const handleGitSignIn = ()=>{
      gitLogin(gitProvider)
      .then(result=>{
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
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
        navigate(from,{replace:true})
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
            
            <FaGoogle size='3rem' className='icon' onClick={handleGoogleSignIn} />
             <FaGithub size='3rem' className='icon' onClick={handleGitSignIn}></FaGithub>
            
        </div>
    );
};

export default Login;