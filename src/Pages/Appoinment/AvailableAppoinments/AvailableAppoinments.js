import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppoinmentOption from './AppoinmentOption';

const AvailableAppoinments = ({ selectDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectDate, "PP");

    const {data: appoinmentOption = [], refetch } = useQuery({
        queryKey: ['appoinment-options'],
        queryFn: () => fetch(`http://localhost:5000/appoinment-options?date=${date}`)
            .then(res => res.json())

    });

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
                    refetch={refetch}
                />}
        </section>
    );
};

export default AvailableAppoinments;