import { createBrowserRouter } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar/Navbar";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import DonationRequests from "../Pages/DonationRequests/DonationRequests";

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
          path: 'donation-requests',
          element: <DonationRequests></DonationRequests>
        }
      ]

    },
  ]);

  export default router;