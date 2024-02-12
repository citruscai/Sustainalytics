import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import Group_1 from '../images/Group_1.png';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, username, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    console.log(`Authentication State Updated: isAuthenticated=${isAuthenticated}, username=${username}`);
  }, [isAuthenticated, username]);

  return (
    <nav className="bg-blue-200 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        <div></div>
        <div>
          <Link to="/">
            <img src={Group_1} alt="Code Pink Logo" className="mx-auto h-8" />
          </Link>
        </div>
        <ul className="flex space-x-4">
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/" className="text-black hover:text-blue-300">Hi {username}</Link>
              </li>
              <li>
              <Link to="/map" className="text-black hover:text-blue-300">Locations </Link>
              </li>
              <li>
              <Link to="/countries" className="text-black hover:text-blue-300">Country Sustainbility Metrics</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-black hover:text-blue-300">Logout</button>
              </li>
              
              
            </>
          ) : (
            <>
              <li>
                <Link to="/signup" className="text-black hover:text-blue-300">Sign Up</Link>
              </li>
              <li>
                <Link to="/login" className="text-black hover:text-blue-300">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
