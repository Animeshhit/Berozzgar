"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BaseUrl from "../config/apiConfig";
import { toast } from "react-toastify";
//for animation only
import { gsap } from "gsap";
// import SplitType from "split-type";

// this component is made for the about section
const CardForShow = (props) => {
  return (
    <>
      <div
        className="card bg-black py-4 px-6 rounded-full w-max flex items-center justify-between"
        style={props.style}
      >
        <h2 className="font-inter text-white text-normal sm:text-xl font-bold">
          {props.name}
        </h2>
        <div className="flex items-center gap-4 ml-12">
          <Link href={props.Insta}>
            <Image src="/BEInsta.svg" alt="" width={30} height={30} />
          </Link>
          <Link href={props.LinkDin}>
            <Image src="/BELinkdin.svg" width={30} height={30} />
          </Link>
        </div>
      </div>
    </>
  );
};

const Page = () => {
  //getting contact form data
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [contactBtn, setContactBtn] = useState(false);

  //handleChange
  const handleChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };

  //onsubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contactDetails.description.length < 10) {
      return alert("message is too short");
    }

    try {
      setContactBtn(true);
      let REQ = await fetch(`${BaseUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactDetails),
      });
      let RES = await REQ.json();

      toast.success(RES.message);
      setContactDetails({ name: "", email: "", description: "" });
    } catch (err) {
      toast.error("something went wrong please try again later");
    } finally {
      setContactBtn(false);
    }
  };
  // for the shake of animation
  useEffect(() => {
    //  this code section is for header section only

    let tl = gsap.timeline();
    tl.to("#header_text", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.in",
    })
      .to("#para_text", {
        opacity: 1,
        duration: 0.6,
        ease: "circ.in",
      })
      .to("#hero_cta", {
        scale: 1,
        duration: 0.3,
        ease: "power1.in",
      })
      .to("#hero_image", {
        opacity: 1,
        duration: 1,
        ease: "power2.in",
      });

    // this code section is for contact section
    // gsap.to("#contact__left", {
    //   scrollTrigger: "#contact__left",
    //   x: 0,
    //   duration: 2,
    // });
  }, []);

  return (
    <>
      {/* Hero Section  */}
      <div className="w-full mt-6 sm:mt-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center sm:flex-row flex-col-reverse">
            <div className="left___container w-full text-center sm:text-left sm:w-2/3">
              <h1
                id="header_text"
                className="font-inter opacity-0 sm:text-left text-center text-3xl sm:text-5xl font-bold text-white leading-relaxed"
              >
                Hey👋, “Empowering Aspiring{" "}
                <span className="text-accent">Engineers”</span>
              </h1>
              <p
                id="para_text"
                className="mt-4 opacity-0 text-gray-300 leading-relaxed sm:text-base text-sm"
              >
                Elevate your engineering journey with study resources, expert
                advice, and motivation. Access class notes and achieve academic
                excellence. Your one-stop destination for engineering success.
              </p>
              <Link
                href="/get-started"
                id="hero_cta"
                className="mt-8 scale-0 flex items-center bg-accent py-3 px-6 rounded-full w-max gap-3 font-bold transition hover:bg-white mx-auto sm:mx-0"
              >
                Let's Study
                <ion-icon className="text-xl" name="chevron-forward"></ion-icon>
              </Link>
            </div>
            <div className="right__container relative flex items-center justify-end w-full sm:w-2/3 h-auto">
              <Image
                id="hero_image"
                className="opacity-0"
                src="/Hero.svg"
                alt="Welcome__image"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Hero section ends  */}

      {/* contact section start  */}

      <div id="contact" className="w-full bg-black mt-28 py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center sm:flex-row flex-col sm:gap-0 gap-14">
            <div
              id="contact__left"
              className="left__container w-full sm:w-1/2"
            >
              <h2 className="text-3xl text-white sm:text-4xl font-inter font-bold">
                Any <span className="text-accent">query</span> or Any{" "}
                <span className="text-accent">Questions !</span> Let’s{" "}
                <span className="text-accent">Connect.</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base capitalize mt-4">
                Just share your query our team will contact you soon
              </p>
              <button
                type="button"
                className="mt-8 flex items-center bg-accent py-3 px-6 rounded-full w-max gap-3 font-bold transition hover:bg-white"
              >
                Let's Connect
                <ion-icon className="text-xl" name="chevron-forward"></ion-icon>
              </button>
              <div className="flex items-center justify-end">
                <div className="relative hidden sm:block w-1/2 h-36 mt-16">
                  <Image src="/BEBigarrow.svg" alt="leftIcon" fill={true} />
                </div>
              </div>
            </div>
            <div className="right__container w-full sm:w-1/2 flex items-center justify-end">
              <form
                className="main__form w-full sm:w-3/4 bg-white py-4 px-4 rounded-md"
                onSubmit={handleSubmit}
              >
                <h2 className="text-2xl font-bold font-inter">Contact us</h2>
                <p className="text-sm text-zinc-700 mt-1">
                  Feel Free to share anything we will contact you soon
                </p>
                <div className="text-input__box mt-6">
                  <label
                    htmlFor="username"
                    className="block text-zinc-700 font-semibold text-sm font-inter mt-3"
                  >
                    Name
                  </label>
                  <input
                    className="mt-2 py-3 px-4 focus:border-zinc-700 transition w-full text-sm border-2 border-zinc-300 outline-none rounded-md resize-none"
                    id="username"
                    name="name"
                    value={contactDetails.name}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div className="text-input__box mt-6">
                  <label
                    htmlFor="useremail"
                    className="block text-zinc-700 font-semibold text-sm font-inter mt-3"
                  >
                    Email
                  </label>
                  <input
                    className="mt-2 py-3 px-4 focus:border-zinc-700 transition w-full text-sm border-2 border-zinc-300 outline-none rounded-md resize-none"
                    id="useremail"
                    name="email"
                    value={contactDetails.email}
                    required={true}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-area__box">
                  <label
                    htmlFor="query"
                    className="block text-zinc-700 font-semibold text-sm font-inter mt-3"
                  >
                    Description
                  </label>
                  <textarea
                    className="mt-2 py-3 px-4 focus:border-zinc-700 transition w-full text-sm border-2 border-zinc-300 outline-none rounded-md resize-none h-32"
                    id="query"
                    name="description"
                    value={contactDetails.description}
                    required={true}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={contactBtn}
                  className={`mt-5 py-3 ${
                    contactBtn ? "bg-zinc-600" : "bg-zinc-800"
                  } px-4 w-full text-white capitalize rounded-md hover:bg-zinc-600 transition`}
                >
                  {contactBtn ? "Sending message..." : "submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* contact section ends  */}
      {/* about section starts  */}
      <div className="w-full my-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center sm:flex-row flex-col sm:gap-0 gap-12">
            <div className="left__container w-full sm:w-1/2">
              <h2 className="font-inter leading-relaxed text-3xl sm:text-4xl font-bold text-white">
                <span className="text-accent">Who</span> We Are & <br />
                <span className="text-accent">Why</span> We Are Doing It ?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mt-4">
                We are from Haldia Institute Of Technolgy & currently from 2nd
                year in Electrical Engineering.
              </p>
              <p className="text-gray-300 text-sm sm:text-base mt-2">
                We Are here to Break The tought{" "}
                <span className="text-accent">Berozgar Engineers</span>
              </p>
            </div>
            <div className="right__container w-full sm:w-1/2">
              <CardForShow
                Insta="https://www.instagram.com/berozgarengineershit/"
                LinkDin="www.linkedin.com/in/animesh-kumbhakar"
                name="Berozgar Engineers"
                style={{ marginLeft: "auto" }}
              />
              <CardForShow
                Insta="https://www.instagram.com/sourav_majee_625/"
                LinkDin="https://www.linkedin.com/in/sourav-majee/"
                name="Sourav Majee"
                style={{ marginTop: "1rem" }}
              />
              <CardForShow
                Insta="https://www.instagram.com/_saikat1610/"
                LinkDin="https://www.linkedin.com/in/saikat-malik-56b1a0254/"
                name="Saikat Malik"
                style={{ margin: "1rem auto" }}
              />
              <CardForShow
                Insta="https://www.instagram.com/lifeof.daya/"
                LinkDin="https://www.linkedin.com/in/daya-shanker-rauth-57bb16257/"
                name="Daya Shankar Rauth"
                style={{ marginLeft: "auto" }}
              />
              <CardForShow
                Insta="https://www.instagram.com/itsannnni_07/"
                LinkDin="www.linkedin.com/in/animesh-kumbhakar"
                name="Animesh Kumbhakar"
                style={{ marginTop: "1rem" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* about section ends  */}

      <div className="w-full mt-6 sm:mt-12 bg-zinc-900 py-12 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-white font-inter capitalize font-semibold text-3xl">
            Let's Show That We Are{" "}
            <span className="text-gray-400 line-through">Berozgar</span>{" "}
            <span className="text-accent">True Engineers.</span>
          </h2>
          <div className="flex items-center">
            <div className="left__item"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
