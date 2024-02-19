import Image from "next/image";

const Page = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 mt-9 sm:mt-0">
          <div className="flex items-center justify-center gap-8">
            <form className="left__container w-full sm:w-auto">
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
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required={true}
                  className="w-full sm:w-[350px] px-4 py-3 sm:py-2 text-white rounded-md outline-none border-2 border-gray-400 bg-zinc-800"
                />
              </div>
              {/* submit button  */}
              <button
                type="submit"
                className="w-full sm:w-[350px] mt-8 bg-accent py-3 px-4 rounded-md font-semibold transition hover:bg-white"
              >
                Sign up
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
