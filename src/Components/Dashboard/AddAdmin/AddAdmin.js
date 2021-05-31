import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <section className="make-admin">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-5 mx-md-5 mt-5 bg-white form-main d-flex justify-content-center">
                    <div className="py-md-4">
                        <Form.Label>Email</Form.Label>
                        <Form.Row>
                            <Form.Group as={Col} xs="auto" style={{ width: '25rem' }} >
                                <Form.Control type="text"{...register("email", { required: true })}  placeholder="Admin's Email Address" />
                            </Form.Group>
                            <Form.Group as={Col} xs="auto">
                                <Button type="submit"  variant='info' >Add Admin</Button>
                            </Form.Group>
                        </Form.Row>
                    </div>
                </div>
            </Form>
        </section>
    );
};

export default AddAdmin;