import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import airbnb from '../../../images/airbnb.png';
import google from '../../../images/google.png';
import netflix from '../../../images/netflix.png';
import slack from '../../../images/slack.png';
import uber from '../../../images/uber.png';

const Partners = () => {
    return (
        <section>
        <Container className='my-5'>
            <Row xs={12} className='justify-content-around align-items-center '>
                <Col className='text-center mt-4' xs={6} md={2}><img style={{width:'100px'}} src={slack} alt=""/></Col>
                <Col className='text-center  mt-4' xs={6} md={2}><img style={{width:'100px'}} src={google} alt=""/></Col>
                <Col className='text-center  mt-4' xs={6} md={2}><img style={{width:'100px'}} src={uber} alt=""/></Col>
                <Col className='text-center  mt-4' xs={6} md={2}><img style={{width:'100px'}} src={netflix} alt=""/></Col>
                <Col className='text-center  mt-4' xs={6} md={2}><img style={{width:'100px'}} src={airbnb} alt=""/></Col>
            </Row>
        </Container>
    </section>
    );
};

export default Partners;