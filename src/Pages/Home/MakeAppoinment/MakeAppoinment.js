import React from 'react';
import appoinment from '../../../assets/images/doctor-small.png';
import bg from '../../../assets/images/appointment.png';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';
import { Link } from 'react-router-dom';

const MakeAppoinment = () => {
    return (
        <section className='mt-32' style={{
            background: `url(${bg})`
        }}>
            <div className="hero px-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={appoinment} alt="" className="-mt-40 w-1/2 hidden lg:flex rounded-lg shadow-2xl" />
                    <div className='text-start'>
                        <p className='text-xl font-bold text-secondary'>Appointment</p>
                        <h1 className="lg:text-5xl text-3xl text-white lg:font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-gray-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Link to="/appoinment">
                            <PrimaryBtn>{'Get Started'}</PrimaryBtn>
                            </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;