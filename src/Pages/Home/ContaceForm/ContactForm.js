import React from 'react';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';
import bg from '../../../assets/images/appointment.png'

const ContactForm = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }} className="py-10 rounded-lg">
            <div className='mt-5 mb-10'>
                <p className="text-xl text-secondary font-bold">Contact Us</p>
                <h3 className="text-4xl text-white">Stay Connected With Us</h3>
            </div>

            <div className='my-3'>
                <input type="email" placeholder="Email Address" className="input input-bordered w-96" />
            </div>

            <div className='my-3'>
                <input type="text" placeholder="Subject" className="input input-bordered w-96" />
            </div>

            <div className='my-3'>
                <textarea className="textarea textarea-bordered w-96 h-32" placeholder="Your Message"></textarea>
            </div>

            <PrimaryBtn>Submit</PrimaryBtn>
        </div>
    );
};

export default ContactForm;