"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import BaseUrl from "../config/apiConfig";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../redux/reducers/authReducer";

const Root = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth);
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
        console.log(RES);
      }
    } catch (err) {
      console.log(err);
      dispatch(SignIn({ isAuth: false, user: null }));
    }
  };

  useEffect(() => {
    let token = localStorage.getItem("Auth_Token");
    if (token) {
      loginIn(token);
    } else {
      dispatch(SignIn({ isAuth: false, user: null }));
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
  return (
    <>
      {/* <div className="text-center text-white bg-red-600 text-xs capitalize">
        <p>Ea Toh Bass Trailer Hai 😉🚀</p>
      </div> */}
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
                <p className="text-white">{isLoggedIn.user._id}</p>
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
