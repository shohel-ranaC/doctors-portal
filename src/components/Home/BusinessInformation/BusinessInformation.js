import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

const BusinessInformation = () => {
    const infoData =[
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: 'Dhaka Savar B-1000 Road',
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Call Us Now',
            description: '+880 179 826 9001',
            icon: faPhone,
            background: 'primary'
        }
    ]
    return (
        <section className='d-flex justify-content-center'>
           <div className='row w-75'>
              {
                infoData.map(data => <CardInfo info={data}></CardInfo>)
              }
           </div>  
        </section>
    );
};

export default BusinessInformation;