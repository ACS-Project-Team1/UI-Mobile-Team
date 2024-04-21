import React, { createContext, useState, useEffect } from 'react';
import { auth, signInWithCustomToken } from '../constants/firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [tokenUpdated, setTokenUpdated] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((idToken) => {
          setTokenUpdated(idToken);
        }).catch((error) => {
          console.error("Error getting ID token:", error);
        });
      } else {
        setToken(null);
      }
    });
    // Cleanup subscription
    return unsubscribe;
  }, []);

  const login = async (customToken) => {
    try {
      await signInWithCustomToken(auth, customToken);
    } catch (error) {
      console.error("Error signing in with custom token:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ login, token, tokenUpdated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
