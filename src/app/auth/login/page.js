"use client";

import { useState } from "react";

const Page = () => {
  const EmailType = "EMAIL";
  const PhoneType = "PHONE";

  const [type, setType] = useState(PhoneType);

  const changeLoginType = () => {
    if (type == EmailType) {
      setType(PhoneType);
    } else {
      setType(EmailType);
    }
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <h2 className="font-semibold text-white capitalize text-center text-3xl mt-12">
            Welcome Back
          </h2>
          <form className="mx-auto w-full sm:w-[350px] mt-4">
            {type == EmailType ? (
              <div className="input__box mt-9">
                <label htmlFor="email" className="text-gray-400 block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="username@gmail.com"
                  required={true}
                  className="w-full sm:w-[350px] text-white px-4 py-3 sm:py-2 rounded-md bg-zinc-800 border-2 outline-none border-gray-400"
                />
              </div>
            ) : (
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
                    placeholder="8637058xxx"
                    required={true}
                  />
                </div>
              </div>
            )}

            {/* password input box  */}
            <div className="input__box mt-4">
              <label htmlFor="password" className="text-gray-400 block mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required={true}
                className="w-full sm:w-[350px] px-4 py-3 sm:py-2 text-white rounded-md outline-none border-2 border-gray-400 bg-zinc-800"
              />
              <small className="text-white flex items-center justify-end mt-2 underline cursor-pointer">
                Forgot Password
              </small>
            </div>
            {/* submit button  */}
            <button
              type="submit"
              className="w-full sm:w-[350px] mt-8 bg-accent py-3 px-4 rounded-md font-semibold transition hover:bg-white"
            >
              Log in
            </button>
            <p className="text-gray-400 text-center font-semibold mt-4">OR</p>
            <p
              className="text-accent text-center mt-2 capitalize cursor-pointer"
              onClick={changeLoginType}
            >
              Login using {type == EmailType ? "Phone" : "Email"}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Page;
