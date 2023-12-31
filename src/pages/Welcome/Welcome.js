import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ShowCase from "../../components/ShowCase/ShowCase";

const Welcome = ({ progress }) => {
  useEffect(() => {
    progress(100);
  }, []);
  return (
    <>
      <section className="h-full my-6 sm:my-16 w-full">
        <div className="container px-4 mx-auto">
          <div className="flex items-center flex-col-reverse sm:flex-row  justify-center gap-6">
            <div className="left w-full sm:w-3/5">
              <h2 className="text-xl text-center sm:text-left sm:text-3xl capitalize font-bold sm:leading-relaxed">
                Elevate Your Engineering Journey with Comprehensive Study
                Resources, Class Notes, Expert Advice, and Inspiring Motivation.
              </h2>
              <p className="mt-4 text-center text-zinc-500 sm:text-left text-sm sm:text-base sm:mt-3 leading-loose">
                Unlock a world of academic excellence. Access class notes,
                expert suggestions, motivation, and more. Your one-stop
                destination for engineering success.
              </p>
              <NavLink
                to="/home"
                className="flex justify-center items-center gap-2 w-full sm:w-max mt-6 py-3 px-6 bg-zinc-800 hover:bg-zinc-600 transition text-white rounded-md"
              >
                Let’s Study
                <span class="material-symbols-outlined">trending_flat</span>
              </NavLink>
            </div>
            <div className="right w-full sm:w-2/5 flex items-center justify-center">
              <img className="mx-auto" src="./landingpage.svg" alt="students" />
            </div>
          </div>
        </div>
      </section>
      <ShowCase />
    </>
  );
};

export default Welcome;
