import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
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