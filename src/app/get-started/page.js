"use client";

import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [mainAnimatedButton, setMainAnimatedButton] = useState(false);
  const [animation, setAnimation] = useState({
    first: false,
    second: false,
    third: false,
    last: false,
  });

  const handleMouseIn = () => {
    setMainAnimatedButton(true);
    setTimeout(() => {
      setAnimation({ ...animation, first: true });
    }, 600);

    setTimeout(() => {
      setAnimation({ ...animation, first: true, second: true });
    }, 1200);
    setTimeout(() => {
      setAnimation({ ...animation, first: true, second: true, third: true });
    }, 1800);

    setTimeout(() => {
      setAnimation({ last: true, first: true, second: true, third: true });
    }, 2000);
  };

  return (
    <>
      {/* for Desktop user  */}
      <div className="container mx-auto px-5 hidden md:block">
        <div className="flex items-start justify-center gap-200 mt-12">
          <button
            type="button"
            onClick={handleMouseIn}
            className={`bg-accent ${
              mainAnimatedButton ? "afterDotactive gap-6" : ""
            } text-xl font-semibold mt-0.5 py-3 px-6 rounded-full flex items-center gap-3 transition-all afterDot`}
          >
            <span>Choose Your Year</span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
          <div className="buttons">
            <div className="flex items-center mb-12 mt-0.5 gap-[100px]">
              <div
                className={`dot dot-one ${
                  animation.first ? "active" : ""
                } w-5 h-5  rounded-full`}
              ></div>
              <Link
                href="/year/first"
                className={`bg-zinc-800 py-3 rounded-full px-4 transition-all duration-150 block ${
                  animation.first ? "opacity-1" : "opacity-0"
                } text-xl font-bold ${
                  animation.first
                    ? "bg-accent transition-colors delay-500 padding-x"
                    : ""
                }`}
              >
                1st Year
              </Link>
            </div>
            <div className="flex items-center mb-12 gap-[100px]">
              <div
                className={`dot dot-two ${
                  animation.second ? "active" : ""
                } w-5 h-5 rounded-full`}
              ></div>
              <Link
                href="/year/first"
                className={`bg-zinc-800 py-3 rounded-full px-4 transition-all duration-150 block ${
                  animation.second ? "opacity-1" : "opacity-0"
                } text-xl font-bold ${
                  animation.second
                    ? "bg-accent transition-colors delay-500 padding-x"
                    : ""
                }`}
              >
                2nd Year
              </Link>
            </div>
            <div className="flex items-center mb-12 gap-[100px]">
              <div
                className={`dot dot-three ${
                  animation.third ? "active" : ""
                } w-5 h-5 rounded-full`}
              ></div>
              <Link
                href="/year/first"
                className={`bg-zinc-800 py-3 rounded-full px-4 transition-all duration-150 block ${
                  animation.third ? "opacity-1" : "opacity-0"
                } text-xl font-bold ${
                  animation.third
                    ? "bg-accent transition-colors delay-500 padding-x"
                    : ""
                }`}
              >
                3rd Year
              </Link>
            </div>
            <div className="flex items-center mb-12 gap-[100px]">
              <div
                className={`dot dot-four ${
                  animation.last ? "active" : ""
                } w-5 h-5 rounded-full`}
              ></div>
              <Link
                href="/year/first"
                className={`bg-zinc-800 py-3 rounded-full px-4 transition-all duration-150 block ${
                  animation.last ? "opacity-1" : "opacity-0"
                } text-xl font-bold ${
                  animation.last
                    ? "bg-accent transition-colors delay-500 padding-x"
                    : ""
                }`}
              >
                4th Year
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* for mobile or tablet user  */}

      <div className="container px-4 mx-auto mt-14">
        <Link
          href="/year/first"
          data-year="1"
          className="py-3 px-4 bg-accent max-w-sm block mx-auto  w-full rounded-full text-center font-semibold  icon relative"
        >
          First Year
        </Link>
        <Link
          href="/year/first"
          data-year="2"
          className="py-3 px-4 bg-accent max-w-sm block mx-auto  w-full rounded-full text-center font-semibold mt-5  icon relative"
        >
          Second Year
        </Link>
        <Link
          href="/year/first"
          data-year="3"
          className="py-3 px-4 bg-accent max-w-sm block mx-auto  w-full rounded-full text-center font-semibold mt-5  icon relative"
        >
          Third Year
        </Link>
        <Link
          href="/year/first"
          data-year="4"
          className="py-3 px-4 bg-accent max-w-sm block mx-auto  w-full rounded-full text-center font-semibold mt-5  icon relative"
        >
          Fourth Year
        </Link>
      </div>
    </>
  );
};

export default Page;
