import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="font-poppins">
           <div className="absolute top-0 w-full py-2 text-white">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;