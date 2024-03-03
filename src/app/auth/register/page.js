"use client";
import { useDebugValue, useState } from "react";
import Image from "next/image";
import BaseUrl from "../../../config/apiConfig";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/reducers/authReducer";
import { useRouter } from "next/navigation";
import generateUniqueDeviceInfo from "../../../helper/index";
import { removeError } from "../../../redux/reducers/errorReducer";
import { toast } from "react-toastify";

const Page = () => {
  const [data, setData] = useState({
    phone: "",
    email: "",
    password: "",
  });

  //for button status

  const [disabled, setIsDisabled] = useState(false);
  const [isPasswordIsVisiable, setIsPasswordIsVisiable] = useState(false);

  //dispatch system
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { phone, password } = data;
    if (phone.length < 10 || phone.length > 10) {
      toast.warn("Phone Number is Invalid");
      return;
    }
    if (password.length < 8) {
      toast.warn("Phone should be 8 letter long ");
      return;
    }
    let deviceInfo = generateUniqueDeviceInfo();

    localStorage.setItem("Device_Id", deviceInfo);

    try {
      setIsDisabled(true);
      let REQ = await fetch(`${BaseUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, device: deviceInfo }),
      });
      let RES = await REQ.json();
      if (REQ.status == 201) {
        localStorage.setItem("Auth_Token", RES.token);
        dispatch(register(RES.user));
        dispatch(removeError());
        toast.success(RES.message);
        router.replace("/");
      } else {
        toast.info(RES.message);
        console.log(RES);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-4 mt-9 sm:mt-0">
          <div className="flex items-center justify-center gap-8">
            <form
              className="left__container w-full sm:w-auto"
              onSubmit={handleSubmit}
            >
              <h2 className="text-white font-bold text-2xl sm:text-3xl text-center sm:text-left">
                Create A New Account
              </h2>
              {/* // phone number input boxi */}
              <div className="input__box mt-9">
                <label htmlFor="phone" className="text-gray-400 block mb-2">
                  Phone
                </label>
                <div className="flex items-center w-full sm:w-[350px] border-2 border-gray-400 rounded-md">
                  <div className="demo_number_code py-3 sm:py-2 px-3 text-gray-400">
                    +91
                  </div>
                  <input
                    className="py-3 sm:py-2 px-4 w-full sm:w-[300px] bg-zinc-800 border-none outline-none rounded-r-md text-white"
                    id="phone"
                    name="phone"
                    type="number"
                    onChange={handleChange}
                    value={data.phone}
                    placeholder="8637058xxx"
                    required={true}
                  />
                </div>
              </div>
              {/* // email id input box */}
              <div className="input__box mt-4">
                <label htmlFor="email" className="text-gray-400 block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={data.email}
                  placeholder="username@gmail.com"
                  required={true}
                  className="w-full sm:w-[350px] text-white px-4 py-3 sm:py-2 rounded-md bg-zinc-800 border-2 outline-none border-gray-400"
                />
              </div>
              {/* password input box  */}
              <div className="input__box mt-4">
                <label htmlFor="password" className="text-gray-400 block mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={isPasswordIsVisiable ? "text" : "password"}
                    placeholder="Password"
                    onChange={handleChange}
                    value={data.password}
                    required={true}
                    className="w-full sm:w-[350px] px-4 py-3 sm:py-2 text-white rounded-md outline-none border-2 border-gray-400 bg-zinc-800"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsPasswordIsVisiable((value) => !value);
                    }}
                    className="text-white absolute right-3 text-xl top-1/2 flex items-center justify-center border-none outline-none"
                    style={{ transform: "translateY(-50%)" }}
                  >
                    <ion-icon
                      name={
                        isPasswordIsVisiable ? "eye-off-outline" : "eye-outline"
                      }
                    ></ion-icon>
                  </button>
                </div>
              </div>
              {/* submit button  */}
              <button
                type="submit"
                disabled={disabled}
                className="w-full sm:w-[350px] mt-8 bg-accent py-3 px-4 rounded-md font-semibold transition hover:bg-white"
              >
                {disabled ? "Loading..." : "Sign up"}
              </button>
            </form>
            <div className="right__container sm:block hidden">
              <Image
                src="/Register.svg"
                alt="cool guyes"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
