import React from 'react';
import { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';
import Navbar from './../../Shared/Navbar/Navbar';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleChangeDate = date =>{
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleChangeDate={handleChangeDate}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;