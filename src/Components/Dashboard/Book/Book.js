import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Toast } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Select from 'react-select';
import { UserContext } from '../../../App';
import infoEmojis from '../../../images/info-emoji.svg';
import StripePayment from '../StripePayment/StripePayment';

const Book = () => {
    const { selectedService: { name, price } } = useContext(UserContext);
    const [show, setShow] = useState(true);

    const stripePromise = loadStripe('pk_test_51Ie11ZIo3XVCKagbJJnefC4ruHwRuiiS8mPOiugOUPZ3F9isu6mCQJjhdMQ9SHugvc8Y6pjEGk2xYIMhOW2CpJQN00ArldL7I3');
    const [services, setServices] = useState([]);

    const options = services.map(service => ({ value: service.name, label: service.name, price: service.price }));

    const defaultOption = name ? { value: name, label: name, price: price } : options[0] || { value: "Engine Repair", label: "Engine Repair", price: 20000 };

    const [selectedOption, setSelectedOption] = useState(defaultOption);
    const serviceInfo = services.find(service => service.title === selectedOption.value);

    useEffect(() => {
        axios.get('http://localhost:5000/all-services')
            .then(res => setServices(res.data))
            .catch(error => toast.error(error.message))
    }, [])

    const colourStyles = {
        control: styles => (
            {
                ...styles,
                backgroundColor: 'white',
                boxShadow: 'none',
                border: "2px solid #ced4da",
                '&:hover': { border: '2px solid #fd7e15' },
                height: "calc(2em + 0.75rem + 2px)"
            }
        ),

        option: (styles, { isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isDisabled ? null : isSelected ? "#fd7709" : isFocused ? "#fd770928" : null,
                color: isDisabled ? null : isSelected ? "white" : isFocused ? "black" : "black",
                cursor: isDisabled ? 'not-allowed' : 'default',
                ':active': { ...styles[':active'], backgroundColor: !isDisabled && (isSelected ? "#fd7709" : "#fd770948") },
            };
        },
    };
    return (
        <>
        <Toast className="toast-right" onClose={() => setShow(false)} show={show} delay={5000} autohide>
            <Toast.Header>
                <img src={infoEmojis} className="rounded mr-2" alt="Info" />
                <strong className="mr-auto">Important Info</strong>
            </Toast.Header>
            <Toast.Body className="text-center">
                Use this Card Number to test the payment
                <br />
                <b>4242 4242 4242 4242</b>
            </Toast.Body>
        </Toast>

        <section className='w-100 shadow'>
                <div className='p-5 bg-white'>
                    <Row>
                        <Col md={6} xs={12} className="pr-md-4">
                            <label style={{ fontWeight: "bold" }}>Service</label>
                            <Select
                                onChange={option => setSelectedOption(option)}
                                defaultValue={defaultOption}
                                options={options}
                                styles={colourStyles}
                            />
                        </Col>
                        <Col md={6} xs={12} className="pl-md-4 form-main">
                            <label style={{ fontWeight: "bold" }}>Price</label>
                            <div className="form-control w-50 pl-3" style={{ lineHeight: "2", fontWeight: "500" }}>
                                ${price || selectedOption.price}
                            </div>
                        </Col>
                    </Row>

                    <div className="mt-5">
                        <Elements stripe={stripePromise}>
                            <StripePayment serviceInfo={serviceInfo} />
                        </Elements>
                    </div>
                </div>
        </section>
    </>
    );
};

export default Book;