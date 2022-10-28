import React from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useEffect } from 'react';
//import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%'
}

const Dashboard = () => {
    //const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleChangeDate = date =>{
        setSelectedDate(date);
        
    }
    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({date: selectedDate}) 
            
          })
          .then(res => res.json())
          .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section className=''>
            <div style={containerStyle} className="container-fluid row vh-100">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                <Calendar onChange={handleChangeDate} value={new Date()} />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;