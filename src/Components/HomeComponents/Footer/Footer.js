import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {

    return (
        <footer className="footer-container">
            <Container>
                <Row>
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
                        <Col  md={6} lg={4} className="mt-2">     
                            <div>
                                <h3 style={{color:'#404655'}}>Social Links</h3>
                                <span className="animate-border border-black mb-3"></span>
                                    <div className="footer-link">
                                        <a href='https://www.facebook.com/dev.farhanNahid/' target="-blank" className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon icon={faCheckCircle} /> <span>Facebook</span></a>
                                        <a href='https://www.linkedin.com/in/farhan-nahid/' target="-blank" className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon icon={faCheckCircle} /> <span> LinkedIn</span></a>
                                        <a href='https://github.com/farhan-nahid' target="-blank" className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> GitHub</span></a>
                                        <a href='https://www.instagram.com/dev_farhan/' target="-blank" className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span>Instagram</span></a>
                                        <a href='https://twitter.com/dev_farhannahid' target="-blank" className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span>Twitter</span></a>
                                    </div>
                             </div>   
                        </Col>
                </Row>
          </Container>   
        </footer>
    );
};

export default Footer;