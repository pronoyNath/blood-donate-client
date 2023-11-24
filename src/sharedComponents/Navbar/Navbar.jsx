import { Link, NavLink } from "react-router-dom";
import { FaFileWaveform } from "react-icons/fa6";


const Navbar = () => {

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
                className={({ isActive}) =>
                     isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                }
            >
               Donation Requests

            </NavLink>
        </li>
        <li className="text-xl hover:scale-110 transform transition-transform duration-300">
            <NavLink
                to="/blogs"
                className={({ isActive}) =>
                     isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                }
            >
               Blogs

            </NavLink>
        </li>
        <li className="text-xl hover:scale-110 transform transition-transform duration-300">
            <NavLink
                to="/dashboard"
                className={({ isActive}) =>
                     isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                }
            >
               Dashboard

            </NavLink>
        </li>
        <li className="text-xl hover:scale-110 transform transition-transform duration-300">
            <NavLink
                to="/give-fund"
                className={({ isActive}) =>
                     isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                }
            >
               Give Fund

            </NavLink>
        </li>
    </>

    return (

        <div className="navbar max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div>
                  <Link to='/' className=" text-xl">
                        <img src="https://i.ibb.co/64XsX5Z/blood-Logo2.png" alt="" className='w-[180px] h-[100px] hover:scale-110 transform transition-transform duration-300' />
                    </Link>
                </div>
            </div>
            <div className="navbar hidden lg:flex ">
                <ul className="flex gap-5 px-1 text-xl">
                    {links}
                </ul>
            </div>
            <div className="navbar-end hover:scale-110 transform transition-transform duration-300">
                <Link to='/register' className="btn px-10 hover:bg-red-500 bg-red-700 border-none text-white uppercase">Register Now <FaFileWaveform  className="text-2xl animate-bounce"/>
  </Link>
            </div>
        </div>
    );
};

export default Navbar;