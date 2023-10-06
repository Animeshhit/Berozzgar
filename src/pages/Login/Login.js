import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../state/actions/action";
import { useState } from "react";
import { BaseUrl } from "../../config/apiConfig";
import { toast } from "react-toastify";

export default function Login({ progress }) {
  const navigate = useNavigate();
  //dispatch of redux
  const dispatch = useDispatch();
  //store the user data for login
  const [userData, setUserData] = useState({
    userEmail: "",
    password: "",
  });

  //handleChange function for user input
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  //handleSubmit function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userEmail, password } = userData;
    if (!userEmail || !password) {
      toast.warn("Please Fill The Form Properly 😕");
      return;
    }
    progress(30);
    const REQ = await fetch(`${BaseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const RES = await REQ.json();
    if (REQ.status == 200) {
      localStorage.setItem("Engine_Token", RES.token);
      dispatch(LoginUser({ auth: true, ...RES.user }));
      toast.success("You Are Logged In 🚀");
      progress(50);
      navigate("/");
    } else {
      progress(50);
      toast.error(RES.message);
    }
    progress(100);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome Back True Engineer
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="userEmail"
                  type="email"
                  onChange={handleChange}
                  placeholder="yourregisteremail@gmail.com"
                  autoComplete="username"
                  value={userData.userEmail}
                  required
                  className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  onChange={handleChange}
                  value={userData.password}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
              >
                Log in
              </button>
              <button
                type="button"
                className="hidden mt-6 py-2 w-full justify-center rounded-md bg-white flex items-center px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-800 gap-2 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
              >
                <img className="w-5 h-5" src="/logo-google.svg" alt="google" />
                Join With Google
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <NavLink
              to={"/auth/register"}
              className="font-semibold leading-6 text-zinc-800 hover:text-zinc-600"
            >
              Register here
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}
