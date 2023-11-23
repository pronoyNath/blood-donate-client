import { NavLink } from "react-router-dom";
const Navbar = () => {

    const links = <>
        <li className="text-xl">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="text-xl">
            <NavLink
                to="/donation-requests"
                className={({ isActive}) =>
                     isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                }
            >
               Donation Requests

            </NavLink>
        </li>
        <li className="text-xl">
            <NavLink
                to="/blogs"
                className={({ isActive}) =>
                     isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                }
            >
               Blogs

            </NavLink>
        </li>
        <li className="text-xl">
            <NavLink
                to="/dashboard"
                className={({ isActive}) =>
                     isActive ? "active text-red-500 border-b-4 border-red-500" : ""
                }
            >
               Dashboard

            </NavLink>
        </li>
        <li className="text-xl">
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-400 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div>
                    <a className="btn btn-ghost text-xl">
                        <img src="https://i.ibb.co/64XsX5Z/blood-Logo2.png" alt="" className='w-[180px] h-[100px]' />
                    </a>
                </div>
            </div>
            <div className="navbar hidden lg:flex ">
                <ul className="flex gap-5 px-1 text-xl">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;