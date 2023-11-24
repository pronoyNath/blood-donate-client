import { useState } from "react";
import {  Link, NavLink, Outlet, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const Menus = [
    { title: "Dashboard", src: "Chart_fill",link: '/dashboard' },
    { title: "Inbox", src: "Chat", link: 'hello' },
    { title: "Accounts", src: "User", gap: true, link: 'gello'  },
    { title: "Schedule ", src: "Calendar",link: '/dashboard'  },
    { title: "Search", src: "Search",link: '/dashboard'  },
    { title: "Analytics", src: "Chart",link: '/dashboard'  },
    { title: "Files ", src: "Folder", gap: true,link: '/dashboard'  },
    { title: "Setting", src: "Setting",link: '/dashboard'  },
  ];

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gray-400 h-screen p-5  pt-8 relative duration-300`}
      > 
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li 
            onClick={()=> navigate(`${Menu.link}`)}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {/* <Link to={'hello'}> */}
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              {/* </Link> */}
              
             
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        {/* <h1 className="text-2xl font-semibold ">Home Page</h1> */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Dashboard;