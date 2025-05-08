import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import React, { useState, useReducer, useContext } from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'

import WelcomePage from './pages/WelcomePage.jsx'
import CustomerHomePage from './pages/Customer/CustomerHomePage.jsx'
import EmployeeHomePage from './pages/Employee/EmployeeHomePage.jsx'
import LoginPage from './pages/Employee/LoginPage.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage/>,
    },
    {
      path: "/customer/home",
      element: <CustomerHomePage displayOption={0} showsubmitcomplete={false}/>,
    },
    {
      path: "/customer/submitquiz",
      element: <CustomerHomePage displayOption={99} showsubmitcomplete={false}/>,
    },
    {
      path: "/customer/submitquizcomplete",
      element: <CustomerHomePage displayOption={99} showsubmitcomplete={true}/>,
    },
    {
      path: "/employee/home",
      element: <EmployeeHomePage displayOption={0} showsubmitcomplete={false}/>,
    },
    {
      path: "/employee/home/login",
      element: <LoginPage />
    },
    {
      path: "/employee/submitlistcomplete",
      element: <EmployeeHomePage displayOption={99} showsubmitcomplete={true}/>,
    },
  ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>
          {/* <App /> */}
      </RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
