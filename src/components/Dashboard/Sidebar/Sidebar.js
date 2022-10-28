import React from 'react';
import { faGripHorizontal, faCog, faSignOutAlt, faCalendar, faUsers, faFileAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar d-flex flex-colum justify-content-baseline vh-100'>
            <ul className='list-unstyled'>
                <li>
                    <Link to="/doctor/dashboard" className='text-white text-decoration-none'>
                        <FontAwesomeIcon icon={faGripHorizontal}/><span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/appointment" className='text-white text-decoration-none'>
                        <FontAwesomeIcon icon={faCalendar}/><span>Appointment</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/patients" className='text-white text-decoration-none'>
                        <FontAwesomeIcon icon={faUsers}/><span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className='text-white text-decoration-none'>
                        <FontAwesomeIcon icon={faFileAlt}/><span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addDoctor" className='text-white text-decoration-none'>
                        <FontAwesomeIcon icon={faUser}/><span>Add Doctor</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className='text-white text-decoration-none'>
                        <FontAwesomeIcon icon={faCog}/><span>Setting</span>
                    </Link>
                </li>
                <li className='signOut'>
                <Link to="/login" className='text-white text-decoration-none'>
                    <FontAwesomeIcon icon={faSignOutAlt} className='sidebar-icon' /><span>Log Out</span>
                </Link>
            </li>
            </ul>
           
        </div>
    );
};

export default Sidebar;