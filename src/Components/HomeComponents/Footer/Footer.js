import { faFacebookF, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import './Footer.css';


const Footer = () => {

    return (
        <footer className="footer-container">
            <Container>
                <Row>
                    <Col md={12} lg={4} className="mt-2" >
                            <div className="footer">
                                <div  className="footer-logo">
                                    <div className="d-flex justify-content-center">
                                        <img src={logo} alt="..." height="160" />
                                    </div>
                                    <h3 className="text-center mb-0">Moto Repair</h3>
                                </div>
                                    <p className="text-muted"><small> Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</small> </p>
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
                            <h3 style={{color:'#404655'}}>Services</h3>
                            <span className="animate-border border-black mb-3"></span>
                            <p  className="text-muted">Computer Repair</p>
                            <p  className="text-muted">Electronics Repair</p>
                            <p  className="text-muted">Smartphone Repair</p>
                            <p  className="text-muted">Console Repair</p>
                            <p  className="text-muted">Electronics Recovery</p>
                        </Col>
                        <Col  md={6} lg={4} className="mt-2">     
                            <div className="mt-2">
                            <h3 style={{color:'#404655'}}>Useful Links</h3>
                            <span className="animate-border border-black mb-3"></span>
                                <a href="https://www.facebook.com/dev.farhanNahid/" className="mr-3 social-icon" target="-blank"> <strong>Home</strong></a> <br />
                                <a href="https://www.linkedin.com/in/farhan-nahid/" className="mr-3 social-icon" target="-blank"> <strong>Terms</strong></a> <br />
                                <a href="https://www.instagram.com/dev_farhan/" className="mr-3 social-icon" target="-blank"><strong>Privacy & Policy</strong></a> <br />
                                <a href="mailto:nahidahmed9933@gmail.com" className="mr-3 social-icon" target="-blank"><strong>Contact</strong></a> <br />
                            </div>
                        </Col>
                </Row>
          </Container>
           
        </footer>
    );
};

export default Footer;