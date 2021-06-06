import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import benefits from '../../../images/befefit.png';
import './Benefits.css';


const Benefits = () => {
    return (
        <section  className="benefits-container"> 
            <Container>
                <Row className="align-items-center justify-content-center banner">
                    <Col  md={6}>
                        <Image className="img-fluid" src={benefits} alt="..." />
                    </Col>
                    <Col className="offset-md-1" md={5}>
                        <h1>Here are some of Your Benefits!</h1>
                        <p className="text-muted"><small>Our repair technicians have a wealth of experience repairing motor cycles  and diagnosing wealth of great thing experience repairing errors. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed pariatur quas dolore in natus commodi?</small></p>
                        <Button variant="info">Go There</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Benefits;