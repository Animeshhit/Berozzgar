import { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Links = ({ href, title, index }) => {
  return (
    <NavLink
      to={href}
      className="flex items-center gap-2 bg-white justify-center h-16 py-3 sm:h-24 shadow-lg rounded-full text-xl font-semibold relative"
    >
      <p className="indexStyles">{index}</p>
      <span>{title}</span>
      <span className="material-symbols-outlined">school</span>
    </NavLink>
  );
};

const Home = ({ Lprogress }) => {
  useEffect(() => {
    Lprogress(100);
  }, []);
  return (
    <>
      <div className="w-full h-full">
        <div className="container mx-auto px-4">
          {/* for desktop user  */}
          <div className="w-full hidden md:block abosolute mt-12">
            <button
              type="button"
              className="block mx-auto py-3 px-12 bg-zinc-800 text-white dark:text-zinc-800 dark:bg-white dark:hover:bg-gray-400 rounded-full hover:bg-zinc-600 transition"
            >
              Engineering
            </button>
            <div className="arrow_one">
              <img src="./left.svg" alt="path" />
              <NavLink
                to={"/year/1"}
                type="button"
                className="py-3 text-center border-2 border-red dark:text-zinc-800 dark:bg-white dark:hover:bg-gray-400 rounded-full px-6 hover:bg-zinc-600 transition bg-zinc-800 text-white absolute btn"
              >
                First Year
              </NavLink>
            </div>
            <div className="arrow_two">
              <img src="./left-center.svg" alt="path" />
              <NavLink
                to={"/year/2"}
                type="button"
                className="py-3 text-center dark:text-zinc-800 dark:bg-white dark:hover:bg-gray-400 rounded-full px-6 hover:bg-zinc-600 transition bg-zinc-800 text-white absolute btn"
              >
                Second Year
              </NavLink>
            </div>
            <div className="arrow_three">
              <img src="./right-center.svg" alt="path" />
              <NavLink
                to={"/year/3"}
                type="button"
                className="py-3 text-center dark:text-zinc-800 dark:bg-white dark:hover:bg-gray-400 rounded-full px-6 hover:bg-zinc-600 transition bg-zinc-800 text-white absolute cursor-pointer btn"
              >
                Third Year
              </NavLink>
            </div>
            <div className="arrow_four">
              <img src="./right.svg" alt="path" />
              <NavLink
                to={"/year/4"}
                type="button"
                className="py-3 text-center dark:text-zinc-800 dark:bg-white dark:hover:bg-gray-400 rounded-full px-6 hover:bg-zinc-600 transition bg-zinc-800 text-white absolute btn"
              >
                Fourth Year
              </NavLink>
            </div>
          </div>

          {/* for mobile users  */}
          <div className="w-full py-3 gap-x-4 gap-y-12  grid-cols-1 grid md:hidden sm:grid-cols-2 mt-12">
            <Links href={"/year/1"} index={"1"} title="First Year" />
            <Links href={"/year/2"} index={"2"} title="Second Year" />
            <Links href={"/year/3"} index={"3"} title="Third Year" />
            <Links href={"/year/4"} index={"4"} title="Fourth Year" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
