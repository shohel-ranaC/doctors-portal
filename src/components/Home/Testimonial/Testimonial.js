import React from 'react';
import './Testimonial.css';
import wilson from '../../../images/people-1.png';
import ema from '../../../images/people-2.png';
import aliza from '../../../images/people-3.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates doloremque perferendis vitae repellat consequuntur quo nulla mollitia!',
        name: 'Wilson Harry',
        from: 'USA',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates doloremque perferendis vitae repellat consequuntur quo nulla mollitia!',
        name: 'Ema Watson',
        from: 'London',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates doloremque perferendis vitae repellat consequuntur quo nulla mollitia!',
        name: 'Aliza Roy',
        from: 'Canada',
        img: aliza
    }
]

const Testimonial = () => {
    return (
        <section className='testimonial-container my-5 py-5'>
            <div className='container'>
                <div className='header-section'>
                    <h4 className='text-primary'>TESTIMONIAL</h4>
                    <h1>What Our Patients <br/> Says</h1>
                </div>
                <div className="row card-deck mt-5">
                    {
                    testimonialData.map(data => <TestimonialCard testimonial={data}></TestimonialCard> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;