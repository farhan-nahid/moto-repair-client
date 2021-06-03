import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const Services = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/all-services')
            .then(res => {
                setServices(res.data);
                setLoading(false);
            })
            .catch(error => toast.error(error.message))
    }, [])

    return (
        <section id="services" className="text-center">
            <Container>
                <h5>What We Do</h5>
                <h3>Services We Provide</h3>
                <Row className="justify-content-center mx-auto mt-md-5 pt-5">
                    {
                        loading ? <Spinner animation="border" variant="info" /> :
                            services.map(service => <ServiceDetail key={service._id} service={service} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;