import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyAppoinments = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }, 
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead className='bg-white'>
                    <tr className='bg-white'>
                        <th className='bg-white'></th>
                        <th className='bg-white'>Name</th>
                        <th className='bg-white'>Treatment</th>
                        <th className='bg-white'>Date</th>
                        <th className='bg-white'>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, i) => 
                        <tr key={booking._id}>
                            <th>{i + 1}</th>
                            <td>{booking.Patient}</td>
                            <td>{booking.Treatment}</td>
                            <td>{booking.appoinmentDate}</td>
                            <td>{booking.slot}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppoinments;