"use client";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import Link from "next/link";
import CloseBtn from "@/assets/close.svg";
import OpenBtn from "@/assets/menu.svg";
import { useState } from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { useSelector } from "react-redux";

const NavLinkItem = (props) => {
  return (
    <>
      <Link
        className={`${
          props.active ? "text-accent" : "text-white"
        } hover-accent transition`}
        href={props.Url}
      >
        {props.Text}
      </Link>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const AuthDetails = useSelector((state) => state.auth);
  return (
    <>
      <div className="w-full py-1">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              className="logo relative w-16 h-16  sm:w-20 sm:h-20"
            >
              <Image src={Logo} fill={true} alt="Berozgar Engineers" />
            </Link>

            {/* for admin user after login screen  */}
            <div
              className={`${
                isOpen ? "flex" : "hidden"
              } sm:flex sm:flex-row flex-col justify-center sm:bg-transparent text-center sm:text-left sm:justify-end sm:items-center gap-8 sm:relative fixed right-0 bottom-0 top-0 w-4/5 bg-[#2c2b2b] px-10 sm:px-0 sm:w-unset`}
            >
              "
              <NavLinkItem Url="/" Text="Home" />
              <NavLinkItem Url={"/dashboard"} Text="Dashboard" />
              <NavLinkItem Url={"/user/profile"} Text="Profile" />
              <PrimaryBtn Type="button" />
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="sm:hidden absolute left-5 top-5 flex items-center justify-center"
                type="button"
              >
                <Image src={CloseBtn} width={30} height={30} alt="close" />
              </button>
            </div>
            <button
              type="button"
              className="sm:hidden flex items-center justify-center"
              aria-label="opening button for navigation open nav"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <Image src={OpenBtn} width={30} height={30} alt="open Nav" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
