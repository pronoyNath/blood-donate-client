import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const MainLayout = () => {
    AOS.init();
    return (
        <div className="font-poppins">
            
           <div className="absolute top-0 w-full py-2 text-white">
                <Navbar></Navbar>
            </div>
            <div>
            <Outlet></Outlet>
            </div>
            <div><Toaster/></div>
        </div>
    );
};

export default MainLayout;