import { Link, NavLink } from "react-router-dom";
import { FaFileWaveform } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import logo from '../../assets/bloodLogo2.png'
import fundAnimation from '../../assets/animations/fundAnimation.json'
import Lottie from "lottie-react";

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
    }

    const links = <>
        <li className="text-xl hover:scale-125 transform transition-transform duration-300">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "active text-red-500 border-b-4 border-red-500 " : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="text-xl hover:scale-110 transform transition-transform duration-300">
            <NavLink
                to="/donation-requests"
                className={({ isActive }) =>
                    isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                }
            >
                Donation Requests

            </NavLink>
        </li>
        <li className="text-xl hover:scale-110 transform transition-transform duration-300">
            <NavLink
                to="/blogs"
                className={({ isActive }) =>
                    isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                }
            >
                Blogs

            </NavLink>
        </li>
        {user &&
            <li className="text-xl hover:scale-110 transform transition-transform duration-300">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                    }
                >
                    Dashboard

                </NavLink>
            </li>
        }

    </>

    return (

        <div className="navbar max-w-7xl mx-auto mt-5 w-full">

            <div className="navbar-start hidden lg:flex flex-1">
                <ul className="flex gap-7 px-1 text-xl">
                    {links}
                </ul>
            </div>
            <div className="navbar-center justify-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500 rounded-box w-52">
                        {links}
                        <li>
                            <NavLink
                                to="/give-fund"
                                className={({ isActive }) =>
                                    isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                                }
                            >
                                
                                    <span> Give Fund</span>
                             

                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to='/' className=" hidden md:block text-xl">
                        <img src={logo} alt="" className=' w-[80px] h-[80px] hover:scale-110 transform transition-transform duration-300' />

                    </Link>
                </div>
            </div>
            <div className="navbar-end flex-1 gap-7 ">
                <button className="hidden md:block text-xl hover:scale-110 transform transition-transform duration-300">
                    <NavLink
                        to="/give-fund"
                        className={({ isActive }) =>
                            isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                        }
                    >
                        <span className="flex items-center gap-1">
                            <Lottie animationData={fundAnimation} className="w-[100px] mb-5" />
                            <span> Give Fund</span>
                        </span>

                    </NavLink>
                </button>

                {
                    user ?
                        <Link onClick={handleLogOut} className="btn px-10 hover:bg-red-500 bg-red-700 border-none text-white uppercase">Log out<FaFileWaveform className="text-2xl animate-bounce" />
                        </Link>


                        : <Link to='/register' className="btn px-10 hover:bg-red-500 bg-red-700 border-none text-white uppercase">Register Now <FaFileWaveform className="text-2xl animate-bounce" />
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;