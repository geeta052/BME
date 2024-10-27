import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './signup/Signup';
import Login from './login/Login';
import AccountTypeRegistration from './AccountTypeRegistration/AccountTypeRegistration';
import StudentLogin from './StudentLogin/StudentLoginForm';
import InstituteLogin from './InstituteLogin/InstituteLogin';
import AdminLogin from './AdminLogin/AdminLogin'; 
import HomePage from './HomePage/HomePage';
import './App.css';

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />, 
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/account-type",
      element: <AccountTypeRegistration />
    },
    {
      path: "/student-login",
      element: <StudentLogin />,
    },
    {
      path: "/institute-login",
      element: <InstituteLogin />, 
    },
    {
      path: "/admin-login",
      element: <AdminLogin />, 
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
