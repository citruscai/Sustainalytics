import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import codepinklogowhite from '../images/codepinklogowhite.png';

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
    <nav className="bg-custom-nav p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        <div></div>
        <div>
          <Link to="/">
            <img src={codepinklogowhite} alt="Code Pink Logo" className="mx-auto h-8" />
          </Link>
        </div>
        <ul className="flex space-x-4">
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/" className="text-black hover:text-blue-300">Hi {username}</Link>
              </li>
              <li>
              <Link to="/activity" className="text-black hover:text-blue-300">Activity Api</Link>
              </li>
              <li>
              <Link to="/rec" className="text-black hover:text-blue-300">Reccomender</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-black hover:text-blue-300">Logout</button>
              </li>
              
            </>
          ) : (
            <>
              <li>
                <Link to="/signup" className="bg-custom-green hover:bg-custom-green-dark text-white font-bold py-2 px-4 rounded">Sign Up</Link>
              </li>
              <li>
                <Link to="/login" className="bg-custom-green hover:bg-custom-green-dark text-white font-bold py-2 px-4 rounded">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
