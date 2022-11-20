import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    });

    const makeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: "PUT",
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success("Added admin successfully");
                refetch()
            }
        })
    }

    return (
        <div>
            <h3 className="text-5xl font-semibold my-5">All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full my-5">

                    <thead>
                        <tr>
                            <th className='bg-white'></th>
                            <th className='bg-white'>Name</th>
                            <th className='bg-white'>Email</th>
                            <th className='bg-white'></th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            users.map((user, i) => <tr key={users._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='text-center'>
                                    {
                                      user?.role !== "Admin" ?  <p
                                        onClick={() => makeAdmin(user._id)}
                                        className='btn btn-xs btn-primary'>Make Admin</p>
                                        : 
                                        <p className='font-semibold'>Admin</p>
                                    }
                                </td>
                                <td><p className='btn btn-xs btn-outline btn-error'>Delete</p></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;