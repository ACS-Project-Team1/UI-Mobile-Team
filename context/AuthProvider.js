import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(null);

  const login = (token) => {
    setToken(token)
  }

  return (
    <AuthContext.Provider value={{ login, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };