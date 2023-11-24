import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import DonationRequests from "../Pages/DonationRequests/DonationRequests";
import Blogs from "../Pages/Blogs/Blogs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import GiveFund from "../Pages/GiveFund/GiveFund";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Test from "../Pages/Dashboard/Test";
import Hello from "../Pages/Dashboard/hello";
import Gello from "../Pages/Dashboard/Gello";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/donation-requests',
          element: <DonationRequests></DonationRequests>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        // {
        //   path: '/hello',
        //   element: <Hello></Hello>
        // },
        
        {
          path: '/give-fund',
          element: <GiveFund></GiveFund>
        }
      ]
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path:'/dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        // {
        //   path:'/dashboard',
        //   element: <Dashboard></Dashboard>
        // },
        {
          path: 'hello',
          element: <Hello></Hello>
        },
        {
          path: 'gello',
          element: <Gello></Gello>
        }
        
      ]
    },
  ]);

  export default router;