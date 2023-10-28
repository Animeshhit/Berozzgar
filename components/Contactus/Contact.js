"use client";
import Image from "next/image";
import LeftBigArrow from "@/assets/leftBigArrow.svg";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const InputBox = ({ Id, Type, PlaceHolder, Value, Name, Label }) => {
  return (
    <>
      <div className="input_box mb-4">
        <label
          htmlFor={Id}
          className="block text-zinc-800 font-semibold text-sm"
        >
          {Label}
        </label>
        <input
          className="mt-3 py-3 text-sm rounded-md px-4 w-full border-2 outline-none bg-gray-200"
          id={Id}
          type={Type}
          placeholder={PlaceHolder}
          value={Value}
          name={Name}
        />
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <div className="w-full my-12 py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-24 gap-16">
            <div className="left_container text-white w-full sm:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl  font-inter  font-bold">
                Any <span className="text-accent">query</span> or Any{" "}
                <span className="text-accent">Questions</span> Let’s{" "}
                <span className="text-accent">Connect.</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base capitalize mt-3">
                Just share your query our team will contact you soon
              </p>
              <button
                type="button"
                className="mt-8 sm:mt-12 text-black py-2 rounded-full font-semibold px-12 bg-accent"
              >
                Let's meet
              </button>
              <div className="w-full hidden md:flex items-center justify-end">
                <Image
                  src={LeftBigArrow}
                  alt="Contact Now"
                  width={150}
                  height={150}
                  className="mt-10"
                />
              </div>
            </div>
            <div className="right_container w-full md:w-1/3">
              <div className="px-4 sm:px-8 py-6 bg-white rounded-lg text-black">
                <h2 className="font-bold text-2xl font-inter">Contact us</h2>
                <div className="mt-8">
                  <InputBox
                    Type={"text"}
                    Id={"userName"}
                    Name={"userName"}
                    Label="name"
                    PlaceHolder={"Enter your name"}
                  />
                  <InputBox
                    Type="email"
                    Id="userEmail"
                    Name="userEmail"
                    Label="email"
                    PlaceHolder="Enter your email"
                  />
                  <label
                    htmlFor="query"
                    className="block text-zinc-800 font-semibold text-sm"
                  >
                    Query
                  </label>
                  <textarea
                    id="query"
                    placeholder="Type your query here..."
                    className="py-3 px-4 text-sm bg-gray-200 mt-3 rounded-md w-full h-24 resize-none outline-none"
                  ></textarea>
                  <button
                    type="button"
                    className="mt-6 hover:bg-zinc-900 transition py-3 px-4 w-full bg-zinc-800 text-white rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
