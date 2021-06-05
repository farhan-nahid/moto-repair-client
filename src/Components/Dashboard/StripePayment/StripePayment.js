import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useMemo } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { UserContext } from '../../../App';
import './StripePayment.css';


const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    color: "#101d2c",
                    letterSpacing: "0.025em",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};


const StripePayment = ({ orders }) => {
   // console.log(orders);
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const { loggedInUser } = useContext(UserContext);

    const handlePayment = async e => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement),
            billing_details: {
                order:orders.name,
                name: e.target.name.value,
                email: e.target.email.value,
                address: {
                    city: e.target.address.value
                }
            }
        });

    console.log(payload);
        const bookingInfo = {
            payload:payload,
            order:orders,
            name: e.target.name.value,
            email: loggedInUser.email,
            paymentMethod: 'Credit Card',
            status: 'Pending'
        };

        fetch('http://localhost:5000/add-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Booking Successfully!...');
                };

            });
    };

    return (
       <Form onSubmit={handlePayment}>
          <Row>
              <Col md='6'>
              <div className="admin-group">
                <Form.Label htmlFor="name">Your Name</Form.Label>
                <Form.Control name="name" id="name" type="text" value={loggedInUser.name} required />
            </div>
              </Col>
              <Col md='6'>
              <div className="admin-group">
                <Form.Label htmlFor="email">Email Address</Form.Label>
                <Form.Control name="email" id="email" type="email" value={loggedInUser.email} required />
            </div>
              </Col>
              <Col md='6'>
              <div className=" admin-group mt-3">
                <Form.Label htmlFor="address">Address (City)</Form.Label>
                <Form.Control name="address" id="address" type="text" placeholder="Enter Your Address" required />
            </div>
              </Col>
              <Col md='6' className='admin-group mt-3'>
              <Form.Label>
                    <span>Card number</span> <CardNumberElement options={options} />
                </Form.Label>
              </Col>
              <Col md='6' className='admin-group mt-3'>
              <Form.Label>
                    <span>Expiration date</span> <CardExpiryElement options={options} />
                </Form.Label>
              </Col>
              <Col md='6' className='admin-group mt-3'>
              <Form.Label>
                    <span>CVC</span> <CardCvcElement options={options} />
                </Form.Label>
              </Col>
          </Row>
            <div className="text-center mt-3">
                <Button  variant='info'  type="submit" disabled={!stripe}> Checkout </Button>
            </div>
        </Form>
    );
};

export default StripePayment;