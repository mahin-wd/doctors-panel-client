import React from 'react';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Info from '../Info/Info';
import OurServices from '../OerServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <OurServices />
            <DentalCare />
        </div>
    );
};

export default Home;