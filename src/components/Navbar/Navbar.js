import { useState, useEffect } from "react";
import changeTheme from "../../helper";
import { LIGHT, DARK } from "../../helper";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../state/actions/action";
import { toast } from "react-toastify";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth);

  const [theme, setTheme] = useState(LIGHT);
  const dispatch = useDispatch();
  //loggedin user data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
              {isAuth.auth == null ? (
                "Loading..."
              ) : isAuth.auth ? (
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
                        src={isAuth.profileImage}
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
                        <div className="truncate">{isAuth.userEmail}</div>
                      </div>
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                      >
                        <li
                          onClick={() => {
                            alert("Send Your Email to sourav");
                          }}
                        >
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Be An Admin
                          </a>
                        </li>
                      </ul>
                      <div
                        className="py-2 cursor-pointer"
                        onClick={() => {
                          localStorage.removeItem("Engine_Token");
                          dispatch(getUser({ auth: false }));
                          toast.success("You are Logged Out!!");
                          setIsOpen(!isOpen);
                        }}
                      >
                        <p
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign out
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <NavLink to={"/auth/login"}>
                  <button
                    type="button"
                    className="py-2 sm:py-3 flex items-center justify-center gap-1 text-xs sm:text-sm bg-zinc-800 text-white sm:px-12 px-6 dark:text-white  dark:bg-white dark:text-zinc-800  text-white rounded-full transition"
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
    </>
  );
};
export default Navbar;
