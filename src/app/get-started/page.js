"use client";

import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [mainAnimatedButton, setMainAnimatedButton] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
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

  const handleMouseOut = () => {
    if (isClicked) return;
    setTimeout(() => {
      setAnimation({ ...animation, last: false });
    }, 300);

    setTimeout(() => {
      setAnimation({ ...animation, third: false, last: false });
    }, 900);
    setTimeout(() => {
      setAnimation({ ...animation, last: false, second: false, third: false });
    }, 1300);

    setTimeout(() => {
      setAnimation({ last: false, first: false, second: false, third: false });
    }, 1900);

    setTimeout(() => {
      setMainAnimatedButton(false);
    }, 2400);
  };

  return (
    <>
      <div className="container mx-auto px-5">
        <div className="flex items-start justify-center gap-200 mt-12">
          <button
            type="button"
            onClick={() => {
              setIsClicked(true);
            }}
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}
            className={`${isClicked ? "bg-zinc-800" : "bg-accent"} ${
              mainAnimatedButton ? "afterDotactive" : ""
            } hover:bg-zinc-800 text-2xl transition py-3 px-6 rounded-full flex items-center gap-3 afterDot`}
          >
            <span>Choose Your Year</span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
          <div className="buttons">
            <div className="flex items-center mb-12 mt-0.5 gap-[100px]">
              <div
                className={`dot dot-one ${
                  animation.first ? "active" : ""
                } w-5 h-5 bg-accent rounded-full`}
              ></div>
              <Link
                href="/year/first"
                className={`bg-zinc-800 py-3 rounded-full px-24 transition-opacity duration-150 block ${
                  animation.first ? "opacity-1" : "opacity-0"
                } text-2xl ${
                  animation.first ? "bg-accent transition-colors delay-500" : ""
                }`}
              >
                First Year
              </Link>
            </div>
            <div className="flex items-center mb-12 gap-[100px]">
              <div
                className={`dot dot-two ${
                  animation.second ? "active" : ""
                } w-5 h-5 bg-accent rounded-full`}
              ></div>
              <Link
                href="/year/first"
                className={`bg-zinc-800 py-3 rounded-full px-24 transition-opacity duration-150 block ${
                  animation.second ? "opacity-1" : "opacity-0"
                } text-2xl ${
                  animation.second
                    ? "bg-accent transition-colors delay-500"
                    : ""
                }`}
              >
                Second Year
              </Link>
            </div>
            <div className="flex items-center mb-12 gap-[100px]">
              <div
                className={`dot dot-three ${
                  animation.third ? "active" : ""
                } w-5 h-5 bg-accent rounded-full`}
              ></div>
              <Link
                href="/year/first"
                className={`bg-zinc-800 py-3 rounded-full px-24 transition-opacity duration-150 block ${
                  animation.third ? "opacity-1" : "opacity-0"
                } text-2xl ${
                  animation.third ? "bg-accent transition-colors delay-500" : ""
                }`}
              >
                Third Year
              </Link>
            </div>
            <div className="flex items-center mb-12 gap-[100px]">
              <div
                className={`dot dot-four ${
                  animation.last ? "active" : ""
                } w-5 h-5 bg-accent rounded-full`}
              ></div>
              <Link
                href="/year/first"
                className={`bg-zinc-800 py-3 rounded-full px-24 transition-opacity duration-150 block ${
                  animation.last ? "opacity-1" : "opacity-0"
                } text-2xl ${
                  animation.last ? "bg-accent transition-colors delay-500" : ""
                }`}
              >
                Fourth Year
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
