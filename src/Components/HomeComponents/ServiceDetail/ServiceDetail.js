import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
  //  const { setSelectedService, isAdmin } = useContext(UserContext);
    const { name, image, description, price } = service;
    return (
        <Col md={4} className="mb-4 p-2 text-center service-detail">
                <Card className="border-0 py-3" style={{ maxWidth: '25rem' , boxShadow:'0px 2px 5px rgb(0 0 0 / 20%)'}}>
                    <Card.Img variant="top" height="100" src={image} style={{ objectFit: "contain" }} />
                    <Card.Body className="pt-0">
                        <Card.Title as="h4" className="my-4 text-info">{name}</Card.Title>
                        <Card.Text className="text-muted">{description}</Card.Text>
                        <div>
                            <p>${price}</p>
                            <Button  variant='info'> Book Now</Button>
                        </div>
                    </Card.Body>
                </Card>
        </Col>
    );
};

export default ServiceDetail;