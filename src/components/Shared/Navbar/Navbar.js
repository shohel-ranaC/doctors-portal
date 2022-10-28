import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
         </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item me-5">
                <Link className='nav-link mr-5' to='/'>HOME</Link>
              </li>
              <li class="nav-item me-5">
              <Link className='nav-link mr-5' to='/dashboard/patients'>PATIENT</Link>
              </li>
              <li class="nav-item me-5">
              <Link className='nav-link mr-5' to='/dashboard/appointment'>DASHBOARD</Link>
              </li>
              <li class="nav-item me-5">
              <Link className='nav-link mr-5' to='/admin'>ADMIN</Link>
              </li>
              <li class="nav-item me-5">
              <Link className='nav-link mr-5' to='/blog'>BLOG</Link>
              </li>
              <li class="nav-item me-5">
              <Link className='nav-link mr-5' to='/contact us'>CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;