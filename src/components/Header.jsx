import { useEffect, useState } from "react";
import { PiMoon, PiSunDimLight } from "react-icons/pi";
import { NavLink } from "react-router";
import { cntData } from "../context/DataContext";
import { TbWorld } from "react-icons/tb";

function Header() {
  const { data } = cntData();

  const [theme, setTheme] = useState(false);
  const [sideStatus, setSideStatus] = useState(true);
  const regArr = [...new Set(data.map((item) => item.region))];

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  if (theme && theme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (theme && theme === "light") {
    document.documentElement.classList.remove("dark");
  }

  function handleTheme(theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark");
    setTheme(theme);
  }

  return (
    <>
      <header className="p-4 bg-white dark:bg-gray-900  dark:text-white">
        <div className="relative">
          <div
            className={`${sideStatus ? "invisible opacity-0" : "visible opacity-100"} left-0 w-full top-20 z-100  fixed transition-all duration-500  h-screen bg-gray-900`}
          >
            <ul className="flex flex-col justify-center items-center ">
              {regArr.map((item, i) => (
                <li key={i} className="text-center">
                  <NavLink to={`countries/${item}`}>
                    <p className="px-4 cursor-pointer border-b w-200 leading-20">
                      {item}
                    </p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container flex justify-between items-center h-16 mx-auto">
          <NavLink end to={"/countries"}>
            <TbWorld size={35} />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {regArr.map((item, i) => (
              <li key={i} className="flex">
                <NavLink to={`countries/${item}`}>
                  <p className="flex items-center px-4 cursor-pointer border-b leading-20">
                    {item}
                  </p>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="items-center shrink-0 hidden lg:flex"></div>
          <button>
            {theme === "dark" ? (
              <PiSunDimLight
                onClick={() => handleTheme("light")}
                className="cursor-pointer"
                size={35}
              />
            ) : (
              <PiMoon
                onClick={() => handleTheme("dark")}
                className="cursor-pointer"
                size={35}
              />
            )}
          </button>
          <button
            onClick={() => setSideStatus(!sideStatus)}
            className="p-4 lg:hidden cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
