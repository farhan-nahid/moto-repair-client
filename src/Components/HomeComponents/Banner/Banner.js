import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import banner from '../../../images/banner.png';

const Banner = () => {
    return (
        <section > 
            <Container>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={4}>
                        <h1>We’re Finding Solution For Your Problems</h1>
                        <p className="text-muted"><small>Our repair technicians have a wealth of experience repairing mobile devices and diagnosing wealth of great thing experience repairing errors.</small></p>
                    </Col>
                    <Col className="offset-md-1" md={6}>
                        <Image className="img-fluid" src={banner} alt="..." />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;