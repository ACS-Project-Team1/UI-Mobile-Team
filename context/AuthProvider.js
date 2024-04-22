import React, { createContext, useState, useEffect } from 'react';
import { auth, signInWithCustomToken } from '../constants/firebase';
import BaseRequest from '../constants/requests';
import { BASE_URL } from '../constants/constant';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null)
  const [tokenUpdated, setTokenUpdated] = useState(null);
  const [profileDetails, setProfileDetails] = useState([]);

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

  const login = async (customToken, userId) => {
    setUserId(userId)
    try {
      await signInWithCustomToken(auth, customToken);
    } catch (error) {
      console.error("Error signing in with custom token:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      getProfileDetails()

    }
  }, [userId, tokenUpdated])

  const getProfileDetails = async () => {
    console.log("getting profile", tokenUpdated, userId)
    try {
      const response = await BaseRequest.getAuthenticated(`${BASE_URL}/users/getUser/${userId}`, tokenUpdated);

      console.log(response.data)

      setProfileDetails(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ login, token, tokenUpdated, userId, profileDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
