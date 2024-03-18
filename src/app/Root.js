"use client";
import Image from "next/image";
import { Style_Script } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import BaseUrl from "../config/apiConfig";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../redux/reducers/authReducer";
import { gsap } from "gsap";
import {
  errorMessage,
  message,
  removeError,
} from "../redux/reducers/errorReducer";

const styleScript = Style_Script({ subsets: ["latin"], weight: ["400"] });

const Root = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth);
  const isError = useSelector((state) => state.error);

  const [Load, setLoad] = useState(true);

  const loginIn = async (token) => {
    try {
      let REQ = await fetch(`${BaseUrl}/auth`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      let RES = await REQ.json();
      if (REQ.status == 200) {
        let deviceId = localStorage.getItem("Device_Id");
        if (deviceId) {
          if (deviceId == RES.user.device) {
            dispatch(SignIn({ isAuth: true, user: RES.user.data }));
          } else {
            dispatch(SignIn({ isAuth: false, user: null }));
          }
        } else {
          dispatch(SignIn({ isAuth: false, user: null }));
        }
      } else {
        dispatch(SignIn({ isAuth: false, user: null }));
        if (REQ.status == 403) {
          dispatch(
            message({
              message:
                "Session expired, (Too Many Devices) please log in again for continued access.",
            })
          );
        } else {
          dispatch(removeError());
        }
      }
    } catch (err) {
      dispatch(
        errorMessage({
          message:
            "Sorry, something went wrong. You might be offline. Please try again later.",
        })
      );
      dispatch(SignIn({ isAuth: false, user: null }));
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    let token = localStorage.getItem("Auth_Token");
    if (token) {
      loginIn(token);
    } else {
      dispatch(SignIn({ isAuth: false, user: null }));
      setLoad(false);
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
   
  }, []);

  return (
    <>
      {/* <div
        className={`loader  fixed transition  top-0 left-0 right-0 bottom-0 bg-black flex items-center justify-center`}
        style={{
          zIndex: "200",
          transitionDuration: "1.2s",
          transform: Load ? "scale(1)" : "scale(6) translateY(-100vh)",
        }}
      >
        <div className="text-center animate-pulse">
          <h3
            className={`text-white font-extrabold text-3xl ${styleScript.className}`}
          >
            Created & Designed <br /> By
          </h3>
          <h1
            className={`text-accent font-extrabold text-4xl sm:text-6xl mt-3 italic uppercase`}
          >
            Animesh
          </h1>
        </div>
      </div>
      {isError.error ? (
        <div
          className={`text-center text-white py-2 ${
            isError.type == "message" ? "bg-blue-600" : "bg-red-600 underline"
          } text-xs capitalize px-`}
        >
          <p>{isError.message}</p>
        </div>
      ) : (
        ""
      )} */}
      <header className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="logo">
              <Link
                href="/"
                className="image__container block relative w-10 h-10 sm:w-10 sm:h-10"
              >
                <Image src="/BELogo.svg" alt="Berozgar Engineers" fill={true} />
              </Link>
            </div>
            <nav className="flex items-center">
              {isLoggedIn.isAuth == null ? (
                <p className="text-white">Loading...</p>
              ) : isLoggedIn.isAuth ? (
                <>
                  <ul className="flex items-center gap-5">
                    <Link
                      href="/profile"
                      className="text-gray-400 hover:text-white transition flex items-center gap-2 justify-center"
                    >
                      {isLoggedIn.user.profileUrl ? (
                        <Image
                          src={isLoggedIn.user.profileUrl}
                          alt={isLoggedIn.user.email}
                          width={60}
                          height={60}
                        />
                      ) : (
                        <ion-icon
                          name="person-circle-outline"
                          style={{ fontSize: "2rem" }}
                        ></ion-icon>
                      )}
                    </Link>
                  </ul>
                </>
              ) : (
                <>
                  {/* for not loggedIn User  */}
                  <Link
                    href="/auth/login"
                    className="py-3 px-3 mr-0 sm:mr-4 text-sm text-white rounded-full font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/register"
                    className="py-3 px-6 text-sm bg-accent rounded-full font-semibold hover:bg-white transition flex items-center gap-2"
                  >
                    Sign up
                    <ion-icon
                      className="text-xl"
                      name="chevron-forward"
                    ></ion-icon>
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export default Root;
