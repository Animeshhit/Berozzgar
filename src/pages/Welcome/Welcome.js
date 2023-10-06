import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const Welcome = ({ progress }) => {
  useEffect(() => {
    progress(100);
  }, []);
  return (
    <>
      <section className="h-full my-6 sm:my-24 w-full">
        <div className="container px-4 mx-auto">
          <div className="flex items-center flex-col-reverse sm:flex-row  justify-center gap-6">
            <div className="left w-full sm:w-3/5">
              <h2 className="text-xl sm:text-3xl capitalize font-bold sm:leading-relaxed">
                Elevate Your Engineering Journey with Comprehensive Study
                Resources, Class Notes, Expert Advice, and Inspiring Motivation.
              </h2>
              <p className="mt-4 text-sm sm:text-base sm:mt-3 leading-relaxed">
                Unlock a world of academic excellence. Access class notes,
                expert suggestions, motivation, and more. Your one-stop
                destination for engineering success.
              </p>
              <NavLink
                to="/home"
                className="flex justify-center items-center gap-2 w-full sm:w-max mt-8 py-3 px-6 bg-zinc-800 hover:bg-zinc-600 transition text-white rounded-full"
              >
                Let’s Begin
                <span class="material-symbols-outlined">trending_flat</span>
              </NavLink>
            </div>
            <div className="right w-full sm:w-2/5 flex items-center justify-center">
              <img className="mx-auto" src="./study.svg" alt="students" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
