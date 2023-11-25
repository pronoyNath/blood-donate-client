import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserRole from "../../Hooks/useUserRole";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [userRole] = useUserRole();


  let Menus = [];

  if (userRole === "admin") {
    Menus = [
      { title: "Dashboard", src: "https://i.ibb.co/pZdfyDq/Chart-fill.png", link: '/dashboard' },
      { title: "All Users", src: "https://i.ibb.co/D4CL4ZJ/group.png", link: 'all-users' },
      { title: "Schedule ", src: "Calendar", link: 'h' },
      { title: "Search", src: "Search", link: 's' },
      { title: "Analytics", src: "Chart", link: 'd' },
      { title: "User Profile", src: "https://i.ibb.co/kcr866p/User.png", gap: true, link: 'profile' },
    ];
  }

  if (userRole === "volunteer") {
    Menus = [
      { title: "Dashboard", src: "https://i.ibb.co/pZdfyDq/Chart-fill.png", link: '/dashboard' },
      { title: "All Users", src: "https://i.ibb.co/D4CL4ZJ/group.png", link: 'all-users' },
      //  { title: "Schedule ", src: "Calendar", link: 'h' },
      //  { title: "Search", src: "Search", link: 's' },
      //  { title: "Analytics", src: "Chart", link: 'd' },
      { title: "User Profile", src: "https://i.ibb.co/kcr866p/User.png", gap: true, link: 'profile' },
    ];
  }

  if (userRole === "donor") {
    Menus = [
      { title: "Dashboard", src: "https://i.ibb.co/pZdfyDq/Chart-fill.png", link: '/dashboard' },
      //  { title: "All Users", src: "https://i.ibb.co/D4CL4ZJ/group.png", link: 'all-users' },
      //  { title: "Schedule ", src: "Calendar", link: 'h' },
      //  { title: "Search", src: "Search", link: 's' },
      //  { title: "Analytics", src: "Chart", link: 'd' },
      { title: "User Profile", src: "https://i.ibb.co/kcr866p/User.png", gap: true, link: 'profile' },
    ];
  }


  // console.log(userRole, "----->", Menus);

  const isDashboardActive = location.pathname === `/dashboard`;

  return (
    <div className="flex overflow-y-hidden">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-gray-800 h-screen p-5 z-50 pt-8 relative duration-300`}
      >
        <img
          src="https://i.ibb.co/TPWHKZL/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-red-500
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div onClick={() => navigate('/')} className="flex gap-x-4 items-center">
          <img
            src="https://i.ibb.co/64XsX5Z/blood-Logo2.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]  w-[100px] h-[70px]"
              }`}
          />
          <h1
            className={`text-white origin-left font-medium text-sm lg:text-lg duration-200 hidden md:block hover:cursor-pointer ${!open && "scale-0"
              }`}
          >
            Blood Donation
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              onClick={() => {
                navigate(`${Menu.link}`);
              }}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "border border-red-500"}
              ${location.pathname == `/dashboard/${Menu?.link}` ? "bg-red-500" : ""}
              
              `}
            >

              <img src={Menu.src} className="h-[20px] w-[20px]" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>


            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7 z-0bg-gray-700">

        {
          isDashboardActive &&
          <div>
            <h1 className="text-2xl font-semibold ">Welcome {user?.displayName}</h1>
            <p>
              "Welcome to our Blood Donation Community! Your decision to be here makes a life-saving impact. Explore, donate, and be a hero today. Together, we make a difference!"</p>
          </div>
        }
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Dashboard;