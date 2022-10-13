import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className='contact-container my-5 py-5'>
        <div className='container z-index'>
            <div className='text-center header'>
                <h5 className='text-primary'>CONTACT US</h5>
                <h1>Always Connect With Us</h1>
            </div>
            <div className='mt-5 form'>
              <input className='form-control mb-3' type="email" name="email" placeholder='Email Address*'  />
              <input className='form-control mb-3' type="text" name="" placeholder='Subject*' />
              <textarea className='form-control mb-5' name="opinion" placeholder='Your Message*' cols="3" rows="3"></textarea>
              <button className='btn btn-primary submit-btn' type="submit">SUBMIT</button>
            </div> 
        </div>
        </section>
    );
};

export default Contact;