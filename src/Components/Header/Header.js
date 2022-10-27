import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import Button from 'react-bootstrap/Button';

import img from '../../images/nav-logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import {  FaUser } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const lightBtn = ()=>{
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
    }
    const darkBtn = ()=>{
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
    }
    const handleLogOut = ()=>{
      logOut()
      .then(()=>{})
      .catch(error=>console.error(error))
    }

const renderToolTip = (props)=>(
  <Tooltip id ="button-tooltip" {...props}>
    {user?.displayName}
    </Tooltip>
)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand to='/home'>
            <img
              alt=""
              src={img}
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Edu-Learning
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav className="ms-auto nav">
            <Link to='/courses'>Courses</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Blog</Link>
            
            <Link to="/login">
                {
                    user?.uid?
                    
                    <>
                    
                    <span>{user?.photoURL ? 
                    <OverlayTrigger placement="right"
                     overlay={renderToolTip} triggerType="hover">
                      <Button className ='btn-tooltip'>
                      <Image style={{height:'30px'}} title={user?.displayName} roundedCircle src={user?.photoURL}></Image></Button>
                      </OverlayTrigger>
            :<FaUser></FaUser>}
 
            </span>
                    <button onClick={handleLogOut}>logOut</button>
                    </>
                    :
                    <>
                     <Link to ='/login'>login</Link>
                     
                    </> 
                }
                
                </Link>
                <Link to='/register'>Register</Link>
                <div>

                </div>
            
            <div>
              <></>
              <button onClick={lightBtn}>Light</button>
              <button onClick={darkBtn}>Dark</button>
            
              
             
            </div>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
        </div>
    );
};

export default Header;


