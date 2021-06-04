import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../App';

const AddAdmin = () => {
    const { loggedInUser: { email } } = useContext(UserContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        if (email === "admin@test.gmail") {
            return swal("Permission restriction!", "As a test-admin, you don't have this permission.", "info");
        }
        const loading = toast.loading('Adding...Please wait!');
        axios.post('http://localhost:5000/add-admin', data)
            .then(res => {
                reset()
                toast.dismiss(loading);
                if (res.data) {
                    return swal("Successfully Added",  `You Successfully Added  ${data.email}  as an admin.`, "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
            });
 }

    return (
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)} className='admin-group'>
                    <div className="p-5 mx-md-5 mt-5 bg-white form-main d-flex justify-content-center shadow" style={{ borderRadius: "15px", maxWidth:'85rem' }}>
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
            </Container>
    );
};

export default AddAdmin;