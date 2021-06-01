import React, { useContext } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { UserContext } from '../../../App';

const Review = () => {
    const { loggedInUser: { photo, name, email } } = useContext(UserContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const loading = toast.loading('Uploading...Please wait!');
        data.img = photo || "https://i.ibb.co/5GzXkwq/user.png";
        data.email = email;

       
}
    return (
        <section>
        <Form style={{borderRadius:'30px'}}  onSubmit={handleSubmit(onSubmit)} className="w-100 form-main shadow">
            <div className="p-5 bg-white">
                <Form.Row className="justify-content-center px-4">
                    <Form.Group as={Col} md={12} className='admin-group'>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" value={name} {...register("name", { required: true })}  placeholder="Enter Your Name" />
                    </Form.Group>

                    <Form.Group as={Col} md={12} className='admin-group'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control    type="text" {...register("address", { required: true })} placeholder="Enter Your Address" />
                    </Form.Group>

                    <Form.Group as={Col} md={12} className='admin-group'>
                        <Form.Label>Your Review</Form.Label>
                        <Form.Control style={{ height: "10rem" }} type="text"as="textarea"{...register("description", { required: true })} placeholder="Tell me Something about this site." />
                    </Form.Group>

                </Form.Row>
                <div className="text-center mt-4">
                    <Button type="submit" variant='info' style={{ padding: ".6rem 2rem" }}>Submit</Button>
                </div>
            </div>
        </Form>
    </section>
    );
};

export default Review;