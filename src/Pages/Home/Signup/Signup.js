import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const signUp = data => {
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;

            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {})
            .catch(err => console.error(err));
            toast.success('Signed Up Successful')
            saveUser(data.name, data.email)
            
        })
        .catch(err => console.error(err));
    }

    const saveUser = (name, email) => {
        const user = {name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .catch(err => console.error(err));
        navigate('/')
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-[380px] h-[300px]">
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(signUp)}>
                        <div className="card-body">
                            <h3 className="text-2xl">Signup</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Name</span>
                                </label>
                                <input {...register("name", {required: true})} type="text" placeholder="name" className="input input-bordered border-gray-300" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Email</span>
                                </label>
                                <input {...register("email", {required: "Email Address is required"})} type="email" placeholder="email" className="input input-bordered border-gray-300" />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Password</span>
                                </label>
                                <input {...register("password", {required: "Password is required"})} type="password" placeholder="password" className="input input-bordered border-gray-300" />
                                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control mt-6">
                            <input className='btn btn-accent' type="submit" value="Sign Up" />
                            </div>
                            <div>
                                <p className=' text-sm'>Already Have an Account??
                                    <Link to="/login">
                                        <span className='text-secondary ml-2'>Login</span>
                                    </Link></p>
                            </div>

                            <div className='relative mt-5'>
                                <hr />
                                <p className="text-sm relative mx-auto bottom-3 bg-white w-10">OR</p>
                            </div>

                            <div className="form-control">
                                <button className="btn btn-outline btn-accent ">CONTINUE WITH GOOGLE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;