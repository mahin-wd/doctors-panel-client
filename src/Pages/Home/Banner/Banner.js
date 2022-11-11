import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const Banner = () => {
    return (
            <div className="hero bg-base-100 my-40">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl my-5" alt="" />
                    <div className='text-start'>
                        <h1 className="text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
                        <p className="py-6 text-accent">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryBtn>{'Get Started'}</PrimaryBtn>
                    </div>
                </div>
            </div>
    );
};

export default Banner;