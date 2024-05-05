import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie to manage cookies
import { Context } from '../../context/authContext';

const LogOut = () => {
  const { logoutUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    // First, clear the authentication cookie (e.g., "token")
    Cookies.remove('token');
    Cookies.remove('token');
    navigate('/');

    // Then redirect to the home page
    

  }, [logoutUser, navigate]);

  
  return null; // No UI is required
};

export default LogOut;
