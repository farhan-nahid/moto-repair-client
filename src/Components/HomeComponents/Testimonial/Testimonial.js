import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Testimonial.css';

const showRating = (star) => {
    const stars = [];
    const int = parseInt(star, 10)
    for (let i = 1; i <= int; i++) {
      stars.push(<FontAwesomeIcon className='rating-icon' icon={faStar} />)
    }
    return (
      <div>{ stars }</div>
    )
  }

const Testimonial = ({ testimonial: { name, address, img, description, star } }) => {
    return (
        <div className="testimonial-card">
        <div className="testimonial-avatar-box">
            <img className="testimonial-avatar img-fluid" src={img} alt={name} />
        </div>
        <div className="testimonial-content">
            <div className="testimonial-description">
                <p>{description}</p>
            </div>
            <h5 className="testimonial-name text-info">{name}</h5>
            <h6>  {  showRating(star) }  </h6>
        </div>
    </div>
    );
};

export default Testimonial;