import React from 'react';

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
                <a class="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link" href="#service">Dental Services</a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link text-white" href="#review">Reviews</a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link text-white" href="#blog">Blog</a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link text-white" href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;