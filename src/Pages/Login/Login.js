import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const { register, handleSubmit, formState: { errors } } = useForm();

    const login = data => {
        console.log(data);

        setLoginError('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true});
        })
        .catch(err => {
            setLoginError(err.message);
        });
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-[380px] h-[300px]">
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className="text-2xl">Login</h3>

                        <form onSubmit={handleSubmit(login)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", {required: "Email Address is required"})} className="input input-bordered border-gray-300" />
                                {errors.email && <div className="error text-red-600">{errors.email.message}</div>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {required:"Password is required"})} className="input input-bordered border-gray-300" />
                                {errors.password && <div className="error text-red-600">{errors.password.message}</div>}
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-accent' type="submit" value="Login" />
                            </div>
                            {
                                loginError && <p className='text-red-500'>{loginError}</p>
                            }
                        </form>


                        <div>
                            <p className=' text-sm'>New to Doctors Panel?
                                <Link to="/signup">
                                    <span className='text-secondary ml-2'>Create new account</span>
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
                </div>
            </div>
        </div>
    );
};

export default Login;