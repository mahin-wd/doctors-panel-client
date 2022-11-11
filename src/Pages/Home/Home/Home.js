import React from 'react';
import Banner from '../Banner/Banner';
import ContactForm from '../ContaceForm/ContactForm';
import DentalCare from '../DentalCare/DentalCare';
import Info from '../Info/Info';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import OurServices from '../OerServices/OurServices';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <OurServices />
            <DentalCare />
            <MakeAppoinment />
            <Testimonial />
            <ContactForm />
        </div>
    );
};

export default Home;