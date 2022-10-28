import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className='col-md-4 mb-5'>
            <div className='card p-3'>
                <div className='card-body text-center'>
                    <h5 className='card-title text-header'>{booking.name}</h5>
                    <h6>{booking.time}</h6>
                    <p>{booking.space} SPACE AVAILABLE</p>
                    <button onClick={openModal} className='btn btn-brand text-uppercase'>Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.name} closeModal={closeModal} date={date}></AppointmentForm>
                </div>
            </div>
            
        </div>
    );
};

export default BookingCard;