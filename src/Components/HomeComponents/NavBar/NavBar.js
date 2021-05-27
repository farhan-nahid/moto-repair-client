import React, { useEffect, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const NavBar = () => {

  const [isSticky, setSticky] = useState(false);
  const [isCollapsed , setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  }, []);

    return (
        <Navbar expand="lg" className={ (isSticky || isCollapsed) ? "slide in py-2 show shadow-sm navbar navbar-expand-sm bg-white navbar-light   fixed-top" : "slide out show navbar navbar-expand-sm navbar-light py-2 fixed-top "}>
          <Container>
              <Navbar.Brand href=""> <Image style={{height:'33px', width:'43px'}} src={logo} /> <strong>Moto Repair</strong></Navbar.Brand>
              <Navbar.Toggle onClick={  () => setCollapsed(!isCollapsed ? 'show' : null )} aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="navbar-nav" >
                  <Nav className="ml-auto text-center">
                    <Nav.Link href="#home" className="mr-3"><strong>Home</strong></Nav.Link>
                    <Nav.Link href="#link" className="mr-3"><strong>About</strong></Nav.Link>
                    <Nav.Link href="#home" className="mr-3"><strong>Service</strong></Nav.Link>
                    <Nav.Link href="#link" className="mr-3"><strong>Contact</strong></Nav.Link>
                    <Nav.Link href="#link" className="mr-3"><strong>Dashboard</strong></Nav.Link>
                    <Button variant="info">Login</Button>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;