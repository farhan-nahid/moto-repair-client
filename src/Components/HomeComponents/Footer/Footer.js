import { faFacebookF, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Footer.css';


const Footer = () => {

    return (
        <footer className="footer-container">
            <Container>
                <Row>
                    <Col md={12} lg={4} >
                            <div className="footer">
                                <div  className="footer-logo">
                                    <div className="d-flex justify-content-center">
                                        <img src={logo} alt="..." height="160" />
                                    </div>
                                    <h3 className="text-center mb-0">Moto Repair</h3>
                                </div>
                                    <p className="text-muted text-center"><small> Reference site about Lorem Ipsum, giving information </small> </p>
                                 <div className="text-center icons">
                                        <a href="https://www.facebook.com/dev.farhanNahid/" className="mr-3 facebook" target="-blank"> <FontAwesomeIcon icon={faFacebookF} /></a>
                                        <a href="https://www.linkedin.com/in/farhan-nahid/" className="mr-3 linkedIn" target="-blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                        <a href="https://www.instagram.com/dev_farhan/" className="mr-3 instagram" target="-blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                        <a href="mailto:nahidahmed9933@gmail.com" className="mr-3 google" target="-blank"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                                        <a href="https://twitter.com/dev_farhannahid" className="mr-3 tweeter " target="-blank"><FontAwesomeIcon icon={faTwitter} /></a>
                                    </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="mt-2">
                           <div className="footer-link">
                                <h3 style={{color:'#404655'}}>Our Services</h3>
                                <span className="animate-border border-black mb-3"></span>
                                <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Bike cleaning and washing</span></Link>
                                <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Yearly bike inspection view</span></Link>
                                <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon icon={faCheckCircle} /> <span> Bike repair and change service</span></Link>
                                <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Bike selling and buying service</span></Link>
                                <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Test driving and speed test</span></Link>
                           </div>
                        </Col>
                        <Col  md={6} lg={4} className="mt-2">     
                            <div>
                                <h3 style={{color:'#404655'}}>Our Support</h3>
                                <span className="animate-border border-black mb-3"></span>
                                    <div className="footer-link">
                                        <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon icon={faCheckCircle} /> <span> How to get started?</span></Link>
                                        <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon icon={faCheckCircle} /> <span> Frequently asked questions</span></Link>
                                        <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Customer testimonials</span></Link>
                                        <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Get a free quote</span></Link>
                                        <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Help & Support Center</span></Link>
                                    </div>
                         </div>   
                        </Col>
                </Row>
          </Container>   
        </footer>
    );
};

export default Footer;