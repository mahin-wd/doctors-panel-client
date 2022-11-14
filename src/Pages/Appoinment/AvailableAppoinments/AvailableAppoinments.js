import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppoinmentOption from './AppoinmentOption';

const AvailableAppoinments = ({ selectDate }) => {
    const [appoinmentOption, setAppoinmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appoinmentOptions.json')
            .then(res => res.json())
            .then(data => setAppoinmentOption(data));
    }, [])

    return (
        <section>
            <p className='text-secondary text-xl font-semibold my-20'>Available Appointments on {format(selectDate, "PP")}</p>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appoinmentOption.map(option => <AppoinmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    selectDate={selectDate}
                    setTreatment={setTreatment}
             />}
        </section>
    );
};

export default AvailableAppoinments;