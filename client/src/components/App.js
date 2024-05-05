import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import Landing from './landing/Landing';
import { Provider, Context } from '../context/authContext';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import ListTodos from './todos/ListTodos';

import LogOut from './auth/LogOut'; // Importing the Logout component 

function App() {
  const { signUp, signIn } = useContext(Context);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            path="/signup"
            element={
              <SignUp
                signUp={async (user) => {
                  const res = await signUp(user);
                  if (res) {
                    Cookies.set('token', res.data.token);
                    // Redirecting to "/todos" after successful sign-up
                    window.location.href = '/todos';
                  }
                }}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <SignIn
                signIn={async (user) => {
                  const res = await signIn(user);
                  if (res) {
                    Cookies.set('token', res.data.token);
                    // Redirecting to "/todos" after successful sign-in
                    window.location.href = '/todos';
                  }
                }}
              />
            }
          />
          <Route path="/todos" element={<ListTodos />} />
          <Route path="/logout" element={<LogOut />} />  {/* New route for logout */}
        </Routes>
      </Router>
    </div>
  );
}

export default () => (
  <Provider>
    <App />
  </Provider>
);
