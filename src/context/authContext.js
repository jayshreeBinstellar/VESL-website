import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  
  const login = (user) => {
    setLoading(true);
    localStorage.setItem('user', JSON.stringify(user));
    setLoading(false);
  };
   const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');  
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const logout = () => {
     localStorage.removeItem('user')
    setUser(null);
   
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
