import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';

const Appoinments = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner
                selectDate={selectDate}
                setSelectDate={setSelectDate}
            ></AppoinmentBanner>

            <AvailableAppoinments
                selectDate={selectDate}
            ></AvailableAppoinments>
        </div>
    );
};

export default Appoinments;