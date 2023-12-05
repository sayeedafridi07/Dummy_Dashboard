import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../navbar/Navbar';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const menu = [
  {
    name: "Dashboard",
    icon: "dashboard.svg",
    link: "/dashboard",
  },
  {
    name: "Patient Management",
    icon: "patient-management.svg",
    link: "/patient-management",
  },
  {
    name: "Communication",
    icon: "communication.svg",
    link: "/communication",
  },
  {
    name: "Settings",
    icon: "settings.svg",
    link: "/settings",
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [active, setActive] = React.useState(location.pathname);
  const [showSidebar, setShowSidebar] = React.useState(false);

  React.useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <>
      <div className={`flex-col justify-between w-72 bg-[var(--white)] p-10 sticky top-20 transition-all duration-500 ${showSidebar ? 'hidden' : 'hidden xl:flex'}`}
        style={{ zIndex: 9999, height: "calc(100vh - 80px)" }}
      >
        <div className="flex flex-col gap-14">
          {menu.map((item) => (
            <Link
              to={item.link}
              className="flex gap-5"
              key={item.name}
            >
              <img
                src={'/assets/icons/' + item.icon}
                alt=""
                className="h-5 object-contain"
                style={{ filter: active === item.link ? "text-[var(--primary)]" : '' }}
              />
              <span className={`whitespace-nowrap ${active.includes(item.link) ? "text-[var(--primary)]" : ''}`}>{item.name}</span>
            </Link>
          ))}
        </div>
        <button className="flex gap-5 text-[var(--secondary)]" onClick={() => logout()}>
          <img
            src="/assets/icons/log-out.svg"
            alt=""
            className="h-5 object-contain"
          />
          <span className="whitespace-nowrap">Logout</span>
        </button>
      </div>
      <div className={`fixed top-1/2 -translate-x-1/2 transform cursor-pointer transition-all duration-500 hidden xl:block  ${showSidebar ? 'left-2' : 'left-72'}`}
        onClick={() => setShowSidebar(!showSidebar)}
        style={{ zIndex: 9999, height: "calc(100vh - 80px)" }}
      >
        <div className="bg-gray-200 rounded-full p-2">
          {showSidebar ? <IoIosArrowBack size={30} title='Close' /> : <IoIosArrowForward size={30} title='Open' />}
        </div>
      </div>
      <div className={`flex-col justify-between w-72 bg-[var(--white)] p-10 fixed top-20 transition-all duration-500 ${!showSidebar ? 'hidden' : 'flex xl:hidden'}`}
        style={{ zIndex: 9999, height: "calc(100vh - 80px)" }}
      >
        <div className="flex flex-col gap-14">
          {menu.map((item) => (
            <Link
              to={item.link}
              className="flex gap-5"
              key={item.name}
            >
              <img
                src={'/assets/icons/' + item.icon}
                alt=""
                className="h-5 object-contain"
                style={{ filter: active === item.link ? "text-[var(--primary)]" : '' }}
              />
              <span className={`whitespace-nowrap ${active.includes(item.link) ? "text-[var(--primary)]" : ''}`}>{item.name}</span>
            </Link>
          ))}
        </div>
        <button className="flex gap-5 text-[var(--secondary)]" onClick={() => logout()}>
          <img
            src="/assets/icons/log-out.svg"
            alt=""
            className="h-5 object-contain"
          />
          <span className="whitespace-nowrap">Logout</span>
        </button>
      </div>
      <div className={`fixed top-1/2 -translate-x-1/2 transform cursor-pointer transition-all duration-500 xl:hidden ${!showSidebar ? 'left-2' : 'left-72'}`}
        onClick={() => setShowSidebar(!showSidebar)}
        style={{ zIndex: 9999, height: "calc(100vh - 80px)" }}
      >
        <div className="bg-gray-200 rounded-full p-2">
          {showSidebar ? <IoIosArrowBack size={30} title='Close' /> : <IoIosArrowForward size={30} title='Open' />}
        </div>
      </div>
    </>
  )
}
