"use client";

import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

let validationSchema = yup.object({
  email: yup.string().required('Email is required').email('Invalid Email'),
  password: yup.string().required().min(6).max(32)
});

const SignInForm = () => {
  const router = useRouter();
  const { setError, reset, register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const handleFormSubmit = async data => {
    try {
      // Logique de soumission
      
      const response = await fetch('http://localhost:3000/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        // Réinitialiser le formulaire après la soumission
        document.getElementById('myForm').reset();
  
        // Rediriger l'utilisateur vers une autre page
        router.push('/prediction');
      } else {
        setError('email', { message: 'Erreur lors de la connexion ffdfdff', type: 'error' });
      }
    } catch (error) {
      // Gérer les erreurs de soumission
      console.error('Erreur lors de la connexion', error);
      setError('email', { message: 'Erreur lors de la connexion', type: 'error' });
    }
  };

  return (
    <div>
      <form id="myForm" onSubmit={handleSubmit(handleFormSubmit)} autoComplete="off">
        <div className="mb-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            placeholder='Email'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors['email'] ? (
            <div className='text-sm text-red-500'>{errors['email'].message}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            type="password"
            id="password"
            {...register('password')}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors['password'] ? (
            <div className='text-sm text-red-500'>{errors['password'].message}</div>
          ) : null}
        </div>
        <div className="submit-container flex gap-4 mx-auto my-6">
            <Link to="/register" className="submit text-white bg-blue-700 px-5 py-2.5 mr-2 mb-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</Link>
            <Link to="/" className="submit text-white bg-blue-700 px-5 py-2.5 mr-2 mb-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</Link>
        </div>
        {/* <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Login
        </button> */}
        
      </form>
    </div>
  );
};

export default SignInForm;