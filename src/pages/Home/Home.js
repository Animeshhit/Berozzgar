import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="container mx-auto px-4">
          <div className="w-full abosolute mt-12">
            <button
              type="button"
              className="block mx-auto py-3 px-12 bg-zinc-800 text-white dark:text-zinc-800 dark:bg-white dark:hover:bg-gray-400 rounded-full hover:bg-zinc-600 transition"
            >
              Engineering
            </button>
            <div className="arrow_one">
              <img src="./left.svg" alt="path" />
              <button
                type="button"
                className="py-3 border-2 border-red dark:text-zinc-800 dark:bg-white dark:hover:bg-gray-400 rounded-full px-6 hover:bg-zinc-600 transition bg-zinc-800 text-white absolute btn"
              >
                First Year
              </button>
              {/* <img className="secondary" src="./left.svg" alt="path" />
          <img
            className="secondary sec-two"
            src="./right-center.svg"
            alt="path"
          /> */}
            </div>
            <div className="arrow_two">
              <img src="./left-center.svg" alt="path" />
              <button
                type="button"
                className="py-3 dark:text-zinc-800 dark:bg-white dark:hover:bg-gray-400 rounded-full px-6 hover:bg-zinc-600 transition bg-zinc-800 text-white absolute btn"
              >
                Second Year
              </button>
              {/* <img
            className="secondary sec-one"
            src="./right-center.svg"
            alt="path"
          />
          <img
            className="secondary sec-two-two"
            src="./right-center.svg"
            alt="path"
          /> */}
            </div>
            <div className="arrow_three">
              <img src="./right-center.svg" alt="path" />
              <button
                type="button"
                className="py-3 dark:text-zinc-800 dark:bg-white dark:hover:bg-gray-400 rounded-full px-6 hover:bg-zinc-600 transition bg-zinc-800 text-white absolute cursor-pointer btn"
              >
                Third Year
              </button>
              {/* <img
            className="secondary sec-three-one"
            src="./right-center.svg"
            alt="path"
          />
          <img
            className="secondary sec-three-two"
            src="./right-center.svg"
            alt="path"
          /> */}
            </div>
            <div className="arrow_four">
              <img src="./right.svg" alt="path" />
              <button
                type="button"
                className="py-3 dark:text-zinc-800 dark:bg-white dark:hover:bg-gray-400 rounded-full px-6 hover:bg-zinc-600 transition bg-zinc-800 text-white absolute btn"
              >
                Four Year
              </button>
              {/* <img
            className="secondary sec-four sec-four-one"
            src="./right-center.svg"
            alt="path"
          />
          <img className="secondary sec-four" src="./right.svg" alt="path" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
