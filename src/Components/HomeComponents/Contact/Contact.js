import emailjs from 'emailjs-com';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

toast.configure()

const Contact = () => {
    
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_fv0zysr', 'template_m4iuf66', e.target, 'user_zZK9MBuRLGpjW0IhFgaL6')
          .then((result) => {
              toast.success("I Received Your Massage Successfully!! Thanks for Your Feedback!!!",{
                  autoClose:8000
              })
          }, (error) => {
            toast.error("Something went wrong!!!",{
                autoClose:8000
            })
          });
          e.target.reset()
        }

    return (
        <section className="contact-container  pb-5">
                <Container className="pt-5"> 
                    <h3 className="text-center">Get In Touch</h3>
                    <p className="row col-md-8 text-center m-auto">I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you</p>
                      <div className="mt-4">
                      <form onSubmit={sendEmail} className="contact-form">
                            <Row>
                                <Col md="6">
                                    <div className="contact-group">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" id="name"  name="name" />
                                    </div>
                                    <div className="contact-group"   onSubmit={sendEmail}>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" />
                                    </div>
                                    <div className="contact-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="number" id="phone" name="subject"  />
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="contact-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" name="message"></textarea>
                                    </div>
                                </Col>
                            </Row>
                            <div className="mt-3 text-center">
                                <Button variant='info' className="brand-btn" type="submit">Send Message</Button>
                            </div>
                        </form>
                      </div>
                </Container>
           </section>
    );
};

export default Contact;