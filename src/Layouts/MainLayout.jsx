import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { motion, useScroll } from "framer-motion";


const MainLayout = () => {
    AOS.init();
    const { scrollYProgress } = useScroll();
    

    return (
        <div className="font-poppins">
            <motion.div
                className="fixed top-18 left-0 right-0 h-2 bg-red-500 origin-[0] z-[9999]"
                style={{ scaleX: scrollYProgress }}
            />
            <div className="absolute top-0 w-full py-2 text-white">
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div><Toaster /></div>
        </div>
    );
};

export default MainLayout;