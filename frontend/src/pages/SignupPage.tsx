import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {backendurl} from '../utils/authentication';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';



const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

const { username, email, password, confirmPassword } = formData;
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
     
      const url = `${backendurl}/users/signup`;
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          })
        });
        const data = await response.json();
        if (response.ok) {
          setSuccessMessage(`Registration successful. Please login!`);
          setErrorMessage('');
        } else {
          setErrorMessage(`Registration failed. Error: ${data.message}`);
          setSuccessMessage('');
        }
      } catch (error) {
        setErrorMessage('Registration failed. Please try again.');
        setSuccessMessage('');
      }
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
      <div className="max-w-md w-full space-y-8 f97316 rounded-lg shadow-md p-6 bg-green-100">
        <div>
          <h2 className="mt-6 text-center text-3xl font-serif italic text-gray-900 bg-green-100">Sign up for an account</h2>
        </div>
        {errorMessage && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {errorMessage}
          </Alert>
        </Stack>
      )}

      {successMessage && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            {successMessage}
          </Alert>
        </Stack>
      )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="new-off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={handleChange}
                
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="new-off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          Already have an account? <Link to="/login" className="font-medium text-green-600 hover:text-green-600">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
