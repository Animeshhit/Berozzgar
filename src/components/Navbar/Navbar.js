import { useState, useEffect } from "react";
import changeTheme from "../../helper";
import { LIGHT, DARK } from "../../helper";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(LIGHT);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") == "light") {
        setTheme(DARK);
      } else {
        setTheme(LIGHT);
      }
    } else {
      localStorage.setItem("theme", "light");
      setTheme(LIGHT);
    }
  }, []);

  const handleChange = () => {
    changeTheme(setTheme);
  };

  return (
    <>
      <div className="w-full shadow-lg bg-white dark:bg-zinc-800 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <NavLink to={"/"} className="logo">
              <span className="font-bold text-sm sm:text-2xl text-zinc-800 dark:text-white">
                Berozgar
                <span className="text-xs ml-1 text-zinc-500 dark:text-gray-400">
                  Engineerers
                </span>
              </span>
            </NavLink>
            <div className="flex items-center gap-2">
              {/* <button
                type="button"
                onClick={handleChange}
                className="p-3 flex items-center justify-center text-sm  text-zinc-800 dark:text-white dark:hover:bg-white dark:hover:text-zinc-800  rounded-full transition hover:bg-zinc-800 hover:text-white"
              >
                <span className="material-symbols-outlined">{theme.icon}</span>
              </button> */}
              {isLoggedIn ? (
                <>
                  <div className="relative">
                    <button
                      id="dropdownAvatarNameButton"
                      data-dropdown-toggle="dropdownAvatarName"
                      className="flex items-center text-xs sm:text-sm py-2 font-medium text-gray-900 rounded-full hover:text-zinc-800 dark:hover:text-blue-500 md:mr-0 dark:text-white"
                      type="button"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 mr-1 rounded-full object-cover"
                        src="./profile.jpg"
                        alt="user photo"
                      />
                      <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div
                      id="dropdownAvatarName"
                      className={`z-10 ${
                        isOpen ? "" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-0 top-20 dark:bg-gray-700 dark:divide-gray-600`}
                    >
                      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div className="truncate">name@flowbite.com</div>
                      </div>
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Be An Admin
                          </a>
                        </li>
                      </ul>
                      <div className="py-2">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <NavLink to={"/auth/login"}>
                  <button
                    type="button"
                    className="py-2 flex items-center justify-center gap-1 text-xs sm:text-sm bg-zinc-800 text-white sm:px-12 px-6 dark:text-white  dark:bg-white dark:text-zinc-800  text-white rounded-full transition"
                  >
                    Log in
                    <span className="material-symbols-outlined">login</span>
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="navbar">
        <div className="navbar-Logo">
          <h4>Berozgar</h4>
          <h5>Engineerers</h5>
        </div>
        <div className="navbar-details">
          <button id="logIn">
            <a href="#">Log In</a>
          </button>
        </div>
      </div> */}
    </>
  );
};
export default Navbar;
