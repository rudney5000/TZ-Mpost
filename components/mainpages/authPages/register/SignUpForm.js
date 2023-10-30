import React from "react";

import { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";


let validationSchema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6).max(32)
});

const Register = () => {
    const [message, setMessage] = useState(null);
    const {setError, reset, register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema)
    });
    
    const handleFormSubmit = async data => {
        setMessage(null);
        // const url = process.env.API
        const url = "http://localhost:3000/api/hello"
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if(res.ok) {
            setMessage("User register succesfully.")
            reset()

            // Redirigez l'utilisateur vers la page "Login"
            router.push('/auth/login');
        } else {
            const response = await res.json();
            setError('email', {message: response?.detail ?? "User Registration Failed", type: "error"})
        }
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit(handleFormSubmit)} autoComplete="off">
                {message && (
                    <div className='text-sm text-green-500'>{message}</div>
                )}
                <div className="mb-2">
                    <label htmlFor="username"
                           className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                    <input type="text" id="username" placeholder="Username"
                            {...register('username')}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    {errors['username'] ? (
                            <div className='text-sm text-red-500'>{errors['username'].message}</div>
                        ) : null}
                </div>
                <div className="mb-2">
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                    <input type="email" id="email" placeholder="Email"
                            {...register('email')}
                           className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    {errors['email'] ? (
                            <div className='text-sm text-red-500'>{errors['email'].message}</div>
                        ) : null}
                </div>
                <div className="mb-4">
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input type="password" id="password" placeholder="Password"
                            {...register('password')}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    {errors['password'] ? (
                            <div className='text-sm text-red-500'>{errors['password'].message}</div>
                        ) : null}
                </div>
                <div className="submit-container text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <Link to="/login">Register</Link>
                </div>
                {/* <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register
                </button> */}
            </form>
        </div>
    );
}

export default Register;