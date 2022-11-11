import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='bg-gradient-to-r from-primary to-secondary border-none text-white flex items-center w-full py-10 px-5 rounded-xl'>
                <img src={clock} alt="" />
                <div className='text-start ml-3'>
                    <h2 className="text-xl font-semibold my-3">Opening Hours</h2>
                    <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='bg-accent border-none text-white flex items-center w-full py-10 px-5 rounded-xl'>
                <img src={marker} alt="" />
                <div className='text-start ml-3'>
                    <h2 className="text-xl font-semibold my-3">Visit Our Location</h2>
                    <p className="">Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className='bg-gradient-to-r from-primary to-secondary border-none text-white flex items-center w-full py-10 px-5 rounded-xl'>
                <img src={phone} alt="" />
                <div className='text-start ml-3'>
                    <h2 className="text-xl font-semibold my-3">Contact Us Now</h2>
                    <p className="">+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Info;