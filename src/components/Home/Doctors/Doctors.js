import React from 'react';
import doctor from '../../../images/doctor-small.png';
import DoctorCard from '../DoctorCard/DoctorCard';

const doctorData = [
    {
        img: doctor,
        name: 'Dr. Caudi',
        phone: '+880 178 069 6001'    
    },
    {
        img: doctor,
        name: 'Dr. Caudi',
        phone: '+880 178 069 6001'    
    },
    {
        img: doctor,
        name: 'Dr. Caudi',
        phone: '+880 178 069 6001'    
    }
]

const Doctors = () => {
    return (
        <section className='doctor-container my-5 py-5'>
            <div className='container'>
                <div className='header-section text-center'>
                    <h5 className='text-primary'>OUR DOCTORS</h5>
                </div>
                <div className='row card-deck mt-5'>
                    {
                    doctorData.map(data => <DoctorCard doctor={data}></DoctorCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;