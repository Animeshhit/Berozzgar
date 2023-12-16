import { useState, useEffect } from "react";
import changeTheme from "../../helper";
import { LIGHT, DARK } from "../../helper";
import { NavLink, useNavigate } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../state/actions/action";
import { toast } from "react-toastify";
import LogoNewOhmByte from "../../assets/LogoFinal.svg";

const Navbar = () => {
  function emailToUsername(email) {
    // Extract the username from the email by removing everything after the '@' symbol
    const username = email.split("@")[0];
    return username;
  }

  // Example of how to use the function:
  const userEmail = "example@email.com";
  const username = emailToUsername(userEmail);

  const isAuth = useSelector((state) => state.auth);
  const navigate = useNavigate();

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
      <div className="w-full dark:bg-zinc-800 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <NavLink to={"/"} className="logo">
              <img
                className="mr-8"
                style={{ width: "80px", objectFit: "cover" }}
                src={LogoNewOhmByte}
                alt="Ohm Byte"
              />
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
                      className="flex gap-3 items-center text-xs sm:text-sm pl-4 sm:px-4 font-medium text-gray-900 rounded-md hover:text-zinc-800 dark:hover:text-blue-500 md:mr-0 dark:text-white"
                      type="button"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      <img
                        className="w-8 h-8 rounded-full object-cover"
                        src={isAuth.profileImage}
                        alt="user photo"
                      />
                      <span className="text-xs hidden sm:flex capitalize">
                        {isAuth.userName == null
                          ? emailToUsername(isAuth.userEmail)
                          : isAuth.userName}
                      </span>
                      <svg
                        className="w-2.5 h-2.5"
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
                      className={`py-2 z-10 ${
                        isOpen ? "" : "hidden"
                      } bg-white rounded-md shadow-xl w-48 absolute right-0 top-12`}
                    >
                      <NavLink
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        to="/user/profile"
                        className="px-4 flex items-center gap-2 hover:bg-zinc-200 py-2 text-sm text-zinc-500 dark:text-white"
                      >
                        <span className="material-symbols-outlined text-zinc-600">
                          account_circle
                        </span>
                        <span className="text-zinc-800">Account</span>
                        {/* <span>@{isAuth.userEmail}</span> */}
                      </NavLink>
                      <ul
                        className={`${
                          isAuth.role == "ADMIN" ? "hidden" : ""
                        } text-sm text-gray-700 dark:text-gray-200`}
                        aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                      >
                        <li
                          onClick={() => {
                            alert("contact us for admin access");
                          }}
                        >
                          <a className="block px-4 py-2 hover:bg-zinc-200 cursor-pointer flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <span class="material-symbols-outlined">
                              shield_person
                            </span>
                            <span>Contribute</span>
                          </a>
                        </li>
                      </ul>

                      <ul
                        className={`${
                          isAuth.role != "ADMIN" ? "hidden" : ""
                        } text-sm text-zinc-800 `}
                      >
                        <li>
                          <NavLink
                            to="/admin"
                            className="flex items-center gap-2 py-2 px-4 hover:bg-zinc-200 transition dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              setIsOpen(false);
                            }}
                          >
                            <span className="material-symbols-outlined text-zinc-600">
                              publish
                            </span>
                            <span>New Note</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/dashboard"
                            className="flex items-center gap-2 py-2 px-4 hover:bg-zinc-200 transition dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              setIsOpen(false);
                            }}
                          >
                            <span className="material-symbols-outlined text-zinc-600">
                              dashboard
                            </span>
                            <span>Dashboard</span>
                          </NavLink>
                        </li>
                      </ul>

                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          let wantToLogOut = window.confirm(
                            "Are You Sure To Log Out ?"
                          );
                          if (wantToLogOut) {
                            localStorage.removeItem("Engine_Token");
                            dispatch(getUser({ auth: false }));
                            toast.success("You are Logged Out!!");
                            navigate("/", { replace: true });
                            setIsOpen(!isOpen);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                      >
                        <p
                          href="#"
                          className="flex border-t-1 py-2 items-center gap-2 px-4 text-sm text-zinc-800 hover:bg-zinc-200"
                        >
                          <span className="material-symbols-outlined text-red-400">
                            logout
                          </span>
                          <span className="text-red-500">Log Out</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <NavLink to={"/auth/login"}>
                  <button
                    type="button"
                    className="py-2 sm:py-3 flex items-center justify-center gap-1 text-xs sm:text-sm text-white sm:px-8 px-0 text-zinc-900 hover:text-zinc-600 transition rounded-md transition"
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
