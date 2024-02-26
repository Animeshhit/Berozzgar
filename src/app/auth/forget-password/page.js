"use client";

import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const isNotANumber = (e) => {
    let value = e.target.value;
    if (isNaN(value)) {
      e.target.value = "";
      return;
    }
    if (value != "") {
      const next = e.target.nextElementSibling;
      if (next) {
        next.focus();
      }
    }
  };

  const OTPBox = (e) => {
    const target = e.target;
    const key = e.key.toLowerCase();

    if (key == "backspace" || key == "delete") {
      target.value = "";
      const prev = target.previousElementSibling;
      if (prev) {
        prev.focus();
      }
      return;
    }
  };
  return (
    <>
      <section>
        <form
          className="container mx-auto px-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2 className="text-white font-bold capitalize text-center mt-8 text-2xl">
            Forget Password
          </h2>

          <div className="sm:w-[350px] w-full mx-auto">
            <div className="input__box mt-9">
              <label htmlFor="email" className="text-gray-400 block mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={email}
                disabled={isEmailSent}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="username@gmail.com"
                required={true}
                className="w-full sm:w-[350px] text-white px-4 py-3 sm:py-2 rounded-md bg-zinc-800 border-2 outline-none border-gray-400"
              />
            </div>
            {isEmailSent ? (
              <>
                <div className="input__otp__box mt-12">
                  <label className="text-gray-400">Enter OTP</label>
                  <div className="flex items-center justify-between mt-6">
                    <input
                      type="text"
                      maxLength="1"
                      inputMode="numeric"
                      onInput={isNotANumber}
                      onKeyUp={OTPBox}
                      className="w-12 px-4 py-2 rounded-md outline-none border-2 border-gray-600 bg-zinc-800 text-white cursor-pointer transition focus:border-green-400"
                    />
                    <input
                      type="text"
                      maxLength="1"
                      inputMode="numeric"
                      onInput={isNotANumber}
                      onKeyUp={OTPBox}
                      className="w-12 px-4 py-2 rounded-md outline-none border-2 border-gray-600 bg-zinc-800 text-white cursor-not-allowed pointer-events-none focus:border-green-400 transition"
                    />
                    <input
                      type="text"
                      maxLength="1"
                      inputMode="numeric"
                      onInput={isNotANumber}
                      onKeyUp={OTPBox}
                      className="w-12 px-4 py-2 rounded-md outline-none border-2 border-gray-600 bg-zinc-800 text-white cursor-not-allowed pointer-events-none focus:border-green-400 transition"
                    />
                    <input
                      type="text"
                      maxLength="1"
                      inputMode="numeric"
                      onInput={isNotANumber}
                      onKeyUp={OTPBox}
                      className="w-12 px-4 py-2 rounded-md outline-none border-2 border-gray-600 bg-zinc-800 text-white cursor-not-allowed pointer-events-none focus:border-green-400 transition"
                    />
                  </div>
                </div>
              </>
            ) : (
              ""
            )}

            <button
              type="submit"
              className="mt-10 bg-accent capitazli
             w-full py-3 px-4 rounded-md font-semibold cursor-pointer hover:bg-white transition"
              onClick={() => {
                setIsEmailSent(true);
              }}
            >
              {isEmailSent ? "Submit" : "Send OTP"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Page;
