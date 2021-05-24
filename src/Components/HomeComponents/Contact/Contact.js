import emailjs from 'emailjs-com';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
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
        <section className="contact-container ">
                <Container className="pt-5"> 
                    <h3 className="text-center">Get In Touch</h3>
                    <p className="row col-md-8 text-center m-auto">I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you</p>
                      <div className="mt-4">
                            <Form onSubmit={sendEmail} className="col-md-6 m-auto contact-form">
                            <Form.Group controlId="formBasicSubject">
                                <Form.Label >Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name*" name="name" required />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" onSubmit={sendEmail}>
                                    <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email Address*" name="email" required/>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicSubject">
                            <Form.Label>Your Subject</Form.Label>
                                <Form.Control type="text" placeholder="Subject*" name="subject" required />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea">
                                <Form.Label>Your Massage</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Your Message*" name="message" required/>
                            </Form.Group>

                            <Button variant="info" type="submit"> Submit </Button>
                        </Form>
                      </div>
                </Container>
           </section>
    );
};

export default Contact;