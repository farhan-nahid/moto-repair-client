import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import about from '../../../images/about.png';
import './About.css';

const About = () => {
    return (
        <section className="about-container">
            <Container>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={6}>
                        <Image className="img-fluid" src={about} alt="..." />
                    </Col>
                    <Col md={6}>
                        <h6 className="text-info">About Us</h6>
                        <h3>Why Choose Us For Repair ?</h3>
                        <span className="animate-border border-black"></span>
                        <p className="text-muted mt-2"> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur blanditiis voluptatem iusto. Repellat, fugiat mollitia. Architecto dignissimos labore aperiam odit rem, et odio possimus maxime. Accusantium reiciendis magnam repellendus voluptates quos voluptatem, temporibus doloremque atque deserunt ipsam tempore perferendis deleniti quidem exercitationem dolorum id vitae aliquam nemo a Commodi!</small> </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;