import React from 'react';
import './DoctorCard.css';
import {faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DoctorCard = ({doctor}) => {
    return (
        <div className='doctor-card col-md-4 me-4 text-center'>
        <div className='mt-5'>
            <img style={{height:'300px', width:'350px'}} src={doctor.img} alt='images' />
            <h5>{doctor.name}</h5>
            <div className='d-flex justify-content-center'>
                <div>
                  <FontAwesomeIcon className='call-icon' icon={faPhone}></FontAwesomeIcon>
                </div>
                <div>
                    <p className='text-secondary'>{doctor.phone}</p>
                </div>            
            </div>
        </div>
     </div>
    );
};

export default DoctorCard;