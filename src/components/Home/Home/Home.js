import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import Footer from '../../Shared/Footer/Footer';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Header from './../Header/Header';
import Testimonial from './../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;