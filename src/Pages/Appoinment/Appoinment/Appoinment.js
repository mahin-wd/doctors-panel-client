import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const Appoinment = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="Chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker 
                            mode='single'
                            selected={selectDate}
                            onSelect={setSelectDate}
                        />
                        <p>You have selected: <span className='text-cyan-600 font-semibold'>{format(selectDate, "PP")}</span> for the appoinment</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Appoinment;