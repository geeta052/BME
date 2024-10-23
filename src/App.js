import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './signup/Signup';
import Login from './login/Login';
import AccountTypeRegistration from './AccountTypeRegistration/AccountTypeRegistration';
import StudentLogin from './StudentLogin/StudentLoginForm'; 
import './App.css';

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/account-type",
      element: (
        <div>
          <h1>Welcome to BookMyEvent</h1>
          <AccountTypeRegistration />
        </div>
      ),
    },
    {
      path: "/student-login", 
      element: <StudentLogin />, 
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
