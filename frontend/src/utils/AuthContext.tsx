import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
import { getCookie,deleteCookie,setCookie } from './authentication'; 

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  logout: () => void; 
  login:(username:string)=> void;
}

const AuthContext = createContext<AuthContextType>({ isAuthenticated: false, username: null,logout: () => {},login: () => {}});


export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const username = getCookie('username'); 
    if (username) {
      setIsAuthenticated(true);
      setUsername(username);
    }
  }, []);
  const login = (username:string) => {
    console.log(username)
    setCookie("username", username);
    setIsAuthenticated(true);
    setUsername(username);
  };
  const logout = () => {
    deleteCookie('username'); 
    setIsAuthenticated(false);
    setUsername(null);
};
  return (
    <AuthContext.Provider value={{ isAuthenticated, username,logout,login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
