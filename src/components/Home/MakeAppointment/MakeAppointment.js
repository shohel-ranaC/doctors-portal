import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className='make-appointment'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 d-none d-md-block'>
                        <img src={doctor} alt='doctor' />
                       </div>
                       <div className='col-md-7 text-white py-5 text-color'>
                        <h5 className='text-primary'>APPOINTMENT</h5>
                        <h1 className='my-4'>Make an Appointment <br/> Today</h1>
                        <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex harum eaque ea. Nam saepe laborum libero. Vitae, praesentium!
                         Tempora, aspernatur inventore. Quis, provident? Eius unde cumque, magni veritatis
                         ut explicabo.
                         </p>
                         <button className='btn btn-primary'>learn More</button>
                       </div>
                </div>
            </div>
            
        </section>
    );
};

export default MakeAppointment;