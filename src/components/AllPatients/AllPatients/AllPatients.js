import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])
    return (
        <div className='container-fluid row'>
            <div className='col-md-2'>
               <Sidebar></Sidebar>
            </div>
            <div className='col-md-10 p-4 pr-5' style={{position:''}}>
                <h5 className="text-header">All Patients</h5>
                <AppointmentDataTable appointments={appointments}></AppointmentDataTable>
            </div>
        </div>
    );
};

export default AllPatients;