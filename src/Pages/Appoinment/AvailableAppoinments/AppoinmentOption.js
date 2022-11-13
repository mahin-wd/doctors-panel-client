import React from 'react';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const AppoinmentOption = ({ option }) => {
    const { name, slots } = option;
    return (
        <div className="card w-96 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-secondary font-semibold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "No available appoinments"}</p>
                <div className="card-actions justify-center mt-5">
                    <PrimaryBtn className=" uppercase">Book Appoinment</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;