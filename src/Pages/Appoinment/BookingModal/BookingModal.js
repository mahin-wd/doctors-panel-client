import React, { useContext } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectDate, refetch }) => {
    const {user} = useContext(AuthContext)
    const { name, slots } = treatment;
    const date = format(selectDate, "PP");

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            Patient: name,
            Treatment: treatment.name,
            appoinmentDate: date,
            slot,
            email,
            phone
        };
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged) {
                toast.success('Successful')
                setTreatment(null);
                refetch();
            }
            else{
                toast.error(data.message);
            }
        })
        
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-secondary font-bold mb-10">{name}</h3>
                    
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5'>

                        <input type="text" readOnly value={date} className="input input-bordered w-full" />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input name="name" defaultValue={user?.displayName} readOnly type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name="email" defaultValue={user?.email} readOnly type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" className="btn btn-accent w-full" value="Submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;