// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


SwiperCore.use([Pagination, Autoplay]);

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-review')
            .then(res => res.json())
            .then(data => setTestimonials(data))
            .catch(error => toast.error(error.message))
    }, []);

    return (
            <section id="reviews" className="testimonials p-md-3">
                <div className="my-5 py-4">
                    <div className="review-title text-center">
                        <span>What Our Clients Says</span>
                        <h2>Testimonials</h2>
                    </div>
                    <div>
                    {testimonials.length > 0 ?
                        <Swiper   loop={true}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={10} >
                            {
                                testimonials.map(testimonial => <SwiperSlide key={testimonial._id}><Testimonial testimonial={testimonial} /></SwiperSlide>)    
                            }
                        </Swiper>
                        :<div className="text-center">
                        <Spinner animation="border" variant="info" />
                    </div>
                    }
                </div>
                </div>
        </section>
    );
};

export default Testimonials;