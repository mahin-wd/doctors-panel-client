import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const Appoinment = ({selectDate, setSelectDate}) => {
    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10 my-10">
                    <img src={chair} alt="Chair" className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker 
                            mode='single'
                            selected={selectDate}
                            onSelect={setSelectDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Appoinment;