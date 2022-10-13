import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({testimonial}) => {
    return (
        <div className='testimonial-card col-md-4 me-4 text-center'>
            <div className='mt-5'>
            <p className='text-secondary'>{testimonial.quote}</p>
            <div className='d-flex justify-content-center mt-5'>
                <div className='image'>
                  <img src={testimonial.img} alt="images" />
                </div>
                <div>
                  <h5 className='text-primary'>{testimonial.name}</h5>
                  <h6 className='text-secondary'>{testimonial.from}</h6>
                </div>
            </div>
         </div>
            
        </div>
    );
};

export default TestimonialCard;