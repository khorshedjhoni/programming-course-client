import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

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

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
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
                    {/* <span> {user?.displayName}</span> */}
                      {/* <OverlayTrigger placement="right" overlay={(<Tooltip id="hi"></Tooltip>)} triggerType="hover">
<img alt="" style={{height:'30px'}}  src={user?.photoURL}/>
</OverlayTrigger> */}

                    <span>{user?.photoURL ? 
                    <OverlayTrigger placement="right" overlay={(<Tooltip id="hi">{user?.displayName}</Tooltip>)} triggerType="hover">
                      <Image style={{height:'30px'}} title={user?.displayName} roundedCircle src={user?.photoURL}></Image>
                      </OverlayTrigger>
            :<FaUser></FaUser>}

                    {/* </OverlayTrigger>
            <Image style={{height:'30px'}} title={user?.displayName} roundedCircle src={user?.photoURL}></Image>
            :<FaUser></FaUser> */}

             
            </span>
                    <button onClick={handleLogOut}>logOut</button>
                    </>
                    :
                    <>
                     <Link to ='/login'>login</Link>
                     
                    </>
                   
                    
                }
                {/* <OverlayTrigger placement="right" overlay={(<Tooltip id="hi">{user?.displayName}</Tooltip>)} triggerType="hover">
<img alt=""  src={user?.photoURL}/>
</OverlayTrigger> */}
                </Link>
                <Link to='/register'>Register</Link>
            {/* <Link>
            {user?.photoURL ? 
            <Image style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>
            :<p>null</p>
            }
            </Link> */}
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


