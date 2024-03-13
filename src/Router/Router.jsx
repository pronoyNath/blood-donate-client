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
import UserProfile from "../Pages/Dashboard/UserProfile";
import Welcome from "../Pages/Dashboard/Welcome";
import AllUser from "../Pages/Dashboard/AllUser";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import CreateDonationReq from "../Pages/Dashboard/CreateDonationReq";
import MyDonationRequests from "../Pages/Dashboard/MyDonationRequests";
import DonaitonDetails from "../Pages/Dashboard/DonaitonDetails";
import UpdateDonationInfo from "../Pages/Dashboard/UpdateDonationInfo";
import ContentManagement from "../Pages/Dashboard/ContentManagement";
import AddBlog from "../Pages/Dashboard/AddBlog";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CreateBlogs from "../Pages/Dashboard/CreateBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donation-requests',
        element: <PrivateRoute><DonationRequests></DonationRequests></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/search-donor',
        element: <SearchPage></SearchPage>
      },

      {
        path: '/give-fund',
        element: <PrivateRoute> <GiveFund></GiveFund></PrivateRoute>
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
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
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
      },
      {
        path: 'all-users',
        element: <PrivateRoute><AdminRoute><AllUser></AllUser></AdminRoute></PrivateRoute>
      },
      {
        path: 'create-donation-request',
        element: <CreateDonationReq></CreateDonationReq>
      },
      {
        path: 'my-donation-requests',
        element: <MyDonationRequests></MyDonationRequests>
      },
      {
        path: 'content-management',
        element: <ContentManagement></ContentManagement>
      },
      {
        path: 'content-management/add-blog',
        element: <AddBlog></AddBlog>
      },
      {
        path: 'create-blog',
        element: <CreateBlogs/>
      },
      {
        path: 'profile',
        element: <UserProfile></UserProfile>
      }

    ]
  },
  {
    path: 'donation-details/:id',
    element: <PrivateRoute><DonaitonDetails></DonaitonDetails></PrivateRoute>
    // loader: ({ params }) => fetch(`https://blood-donate-server.vercel.app/donation-details/${params.id}`)
  },
  {
    path: 'update-donation-info/:id',
    element: <PrivateRoute><UpdateDonationInfo></UpdateDonationInfo></PrivateRoute>,
    loader: ({ params }) => fetch(`https://blood-donate-server.vercel.app/donation-details/${params.id}`)
  }
]);

export default router;