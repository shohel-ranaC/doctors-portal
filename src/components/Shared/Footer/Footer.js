import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <section className='footer-container my-5 py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 d-flex align-items-center'>
                        <div>
                        <p className='text-secondary'>Emergency Dental Care</p>
                        <p className='text-secondary'>Check Up</p>
                        <p className='text-secondary'>Treatment of Personal Diseases</p>
                        <p className='text-secondary'>Tooth Extraction</p>
                        <p className='text-secondary'>Check Up</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <h5 className='text-primary'>Services</h5>
                        <p className='text-secondary'>Emergency Dental Care</p>
                        <p className='text-secondary'>Check Up</p>
                        <p className='text-secondary'>Treatment of Personal Diseases</p>
                        <p className='text-secondary'>Tooth Extraction</p>
                        <p className='text-secondary'>Check Up</p>
                        <p className='text-secondary'>Check Up</p>
                        <p className='text-secondary'>Check Up</p>
                    </div>
                    <div className='col-md-3'>
                        <h5 className='text-primary'>Oral Heath</h5>
                        <p className='text-secondary'>Emergency Dental Care</p>
                        <p className='text-secondary'>Check Up</p>
                        <p className='text-secondary'>Treatment of Personal Diseases</p>
                        <p className='text-secondary'>Tooth Extraction</p>
                        <p className='text-secondary'>Check Up</p>
                        <p className='text-secondary'>Check Up</p>
                        <p className='text-secondary'>Check Up</p>
                    </div>
                    <div className='col-md-3'>
                        <h5 className='text-primary'>Our Address</h5>
                        <p className='text-secondary'>Dhanmondi 32, Mirpur Road<br/> 1207 Dhaka</p>
                        <ul className="social-media list-inline my-5">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </div>
                    <div className='mt-5'>
                    <p className='text-secondary text-center'>Copyright {(new Date().getFullYear())} All Right Reserved</p>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;