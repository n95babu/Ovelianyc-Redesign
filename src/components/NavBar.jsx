import React from 'react'
import Button from 'react-bootstrap/Button'
import OveliaLogo from '../assets/OveliaLogo.png'
// let date = new Date().toJSON().slice(0, 10);
import { Navbar, Nav } from 'react-bootstrap';

import { Link,  animateScroll as scroll } from 'react-scroll'


export default class NavBar extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
  return (

    <nav className='nav'>
      <div className="logo-nav">
        <img className="logo" src={OveliaLogo} alt="logo-pic" />
      </div>
      <Navbar sticky="top" expand="lg">
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <div className='link-items'>

              <p className="link home"  onClick={this.scrollToTop}>Home</p>

              <p className="link">
                <Link
                  activeClass="active"
                  to="menu"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  Menu
              </Link>
              </p>
              
              <p className="link">
                <Link
                  activeClass="active"
                  to="about-us"
                  spy={true}
                  smooth={true}
                  offset={-170}
                  duration={800}
                >
                  About Us
              </Link>
              </p>
            
              <p className="link">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={800}
                >
                  Contact
              </Link>
              </p>

              <a href="https://resy.com/cities/ny/ovelia" className="link" target='blank'> <Button variant="danger" className='resy'>Book Now <span className="white">RESY</span></Button> </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </nav >


  )
}
}

