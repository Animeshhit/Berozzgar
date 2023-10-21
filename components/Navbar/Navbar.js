import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import Link from "next/link";
const Navbar = () => {
  //setting up navbar for the primary screen and also for user and admin role
  return (
    <>
      <div className="w-full py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="logo">
              <Image
                src={Logo}
                width={90}
                height={50}
                alt="Berozgar Engineers"
              />
            </Link>

            {/* for general view */}
            {/* <div className="flex items-center gap-7">
              <Link
                href={"/auth/login"}
                className="text-white font-semibold  hover:text-[#dbeab0] transition"
              >
                Log in
              </Link>
              <Link
                href={"/auth/register"}
                className="bg-[#dbeab0] py-2 px-5 rounded-full font-semibold hover:bg-white transition"
              >
                Sign up
              </Link>
            </div> */}

            {/* for user after login screen*/}
            {/* <div className="flex items-center gap-7">
              <Link
                href={"/user/profile"}
                className="text-white font-semibold  hover:text-[#dbeab0] transition"
              >
                Profile
              </Link>
              <Link
                href={"/logout"}
                className="bg-[#dbeab0] py-2 px-5 rounded-full font-semibold hover:bg-white transition"
              >
                Log out
              </Link>
            </div> */}

            {/* for admin user after login screen  */}
            <div className="flex items-center gap-8">
              <Link
                href={"/dashboard"}
                className="text-white font-semibold  hover:text-[#dbeab0] transition"
              >
                Dashboard
              </Link>
              <Link
                href={"/user/profile"}
                className="text-white font-semibold  hover:text-[#dbeab0] transition"
              >
                Profile
              </Link>
              <Link
                href={"/logout"}
                className="bg-[#dbeab0] py-2 px-5 rounded-full font-semibold hover:bg-white transition"
              >
                Log out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
