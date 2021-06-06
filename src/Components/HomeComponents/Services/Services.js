import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import spinner from '../../../images/service-loder.gif';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const Services = () => {
  //  const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('https://moto-repair.herokuapp.com/all-services')
            .then(res => {
                setServices(res.data);
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
                        services.length  > 0 ? 
                            services.map(service => <ServiceDetail key={service._id} service={service} />)
                            : <div className="m-auto">
                                <img  className='img-fluid' src={spinner} alt="..." />
                            </div>
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;