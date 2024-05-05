/*

import apiCall from '../apiCall';

export const signUp = (dispatch) => async (user) => {
  try {
    console.log("hello")
    dispatch({ type: 'SIGNUP_USER_LOADING' });
    const res = await apiCall('/auth/sign_up', 'post', user);
    console.log(res)
    dispatch({ type: 'SIGNUP_USER_SUCCESS', payload: res.data });
    return res;
  } catch (err) {
    if (err.response) {
      dispatch({ type: 'SIGNUP_USER_FAILURE', payload: err.response.data });
    } else {
      // Handle cases where there's no response property
      dispatch({ type: 'SIGNUP_USER_FAILURE', payload: 'An error occurred during sign up.' });
    }
  }
};
export const setCurrentUser = (dispatch) => (Cookies, jwtDecode) => {
  try {
    dispatch({ type: 'SET_CURRENT_USER_LOADING' });
    const payload = jwtDecode(Cookies.get('token'));
    dispatch({ type: 'SET_CURRENT_USER_SUCCESS', payload });
  } catch (err) {
    dispatch({ type: 'SET_CURRENT_USER_FAILURE', payload: err })
  }
}


export const signIn = (dispatch) => async (user) => {
  try {
    dispatch({ type: 'SIGNIN_USER_LOADING' });
    const res = await apiCall('/auth/sign_in', 'post', user);
    dispatch({ type: 'SIGNIN_USER_SUCCESS', payload: res.data });
    return res;
  } catch (err) {
    if (err.response) {
      dispatch({ type: 'SIGNIN_USER_FAILURE', payload: err.response.data });
    } else {
      // Handle cases where there's no response property
      dispatch({ type: 'SIGNIN_USER_FAILURE', payload: 'An error occurred during sign in.' });
    }
  }
};

*/
import Cookies from 'js-cookie'; // Import Cookies at the top of your file

import apiCall from '../apiCall';

// Sign-up action
export const signUp = (dispatch) => async (user) => {
  try {
    dispatch({ type: 'SIGNUP_USER_LOADING' });
    const res = await apiCall('/auth/sign_up', 'post', user);
    dispatch({ type: 'SIGNUP_USER_SUCCESS', payload: res.data });
    return res;
  } catch (err) {
    if (err.response) {
      dispatch({ type: 'SIGNUP_USER_FAILURE', payload: err.response.data });
    } else {
      dispatch({ type: 'SIGNUP_USER_FAILURE', payload: 'An error occurred during sign-up.' });
    }
  }
};

// Set current user action
export const setCurrentUser = (dispatch) => (Cookies, jwtDecode) => {
  try {
    dispatch({ type: 'SET_CURRENT_USER_LOADING' });
    const payload = jwtDecode(Cookies.get('token'));
    dispatch({ type: 'SET_CURRENT_USER_SUCCESS', payload });
  } catch (err) {
    dispatch({ type: 'SET_CURRENT_USER_FAILURE', payload: err });
  }
};

// Sign-in action
export const signIn = (dispatch) => async (user) => {
  try {
    dispatch({ type: 'SIGNIN_USER_LOADING' });
    const res = await apiCall('/auth/sign_in', 'post', user);
    dispatch({ type: 'SIGNIN_USER_SUCCESS', payload: res.data });
    return res;
  } catch (err) {
    if (err.response) {
      dispatch({ type: 'SIGNIN_USER_FAILURE', payload: err.response.data });
    } else {
      dispatch({ type: 'SIGNIN_USER_FAILURE', payload: 'An error occurred during sign-in.' });
    }
  }
};

// Logout action
export const logout = (dispatch) => () => {
  dispatch({ type: 'LOGOUT_USER' }); // Reset authentication state
  Cookies.remove('token'); // Remove token from cookies
};
