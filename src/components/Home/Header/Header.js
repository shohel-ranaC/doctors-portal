import React from 'react';
import BusinessInformation from '../BusinessInformation/BusinessInformation';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInformation></BusinessInformation>
        </div>
    );
};

export default Header;