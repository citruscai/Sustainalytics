import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { backendurl,setCookie,deleteCookie,getCookie } from '../utils/authentication';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useAuth } from '../utils/AuthContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {login,isAuthenticated} = useAuth(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const url = `${backendurl}/users/login`; 
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      console.log(response);
      if (response.ok) {
        login(data.username);
        
        
      } else {
        setErrorMessage('Login Failed');
        
      }
    } catch (error) {
      setErrorMessage('Login Failed')
    }
  };
  //console.log(`Authentication State Updated: isAuthenticated=${isLoggedIn}, username=${username}`);
  if (isAuthenticated) {
    return <Navigate to="/map" />;
  }

  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {errorMessage && (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      </Stack>
    )}

      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
              Log In
            </button>
          </div>
          <div className="text-sm text-center">
            Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-500">Register here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
