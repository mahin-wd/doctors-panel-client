import React from 'react';
import appoinment from '../../../assets/images/doctor-small.png';
import bg from '../../../assets/images/appointment.png';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const MakeAppoinment = () => {
    return (
        <section className='mt-32' style={{
            background: `url(${bg})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={appoinment} alt="" className="-mt-40 w-1/2 hidden lg:flex rounded-lg shadow-2xl" />
                    <div className='text-start'>
                        <p className='text-xl font-bold text-secondary'>Appointment</p>
                        <h1 className="text-5xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-gray-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>{'Get Started'}</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;