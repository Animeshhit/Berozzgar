import Image from "next/image";
import Link from "next/link";
const Root = ({ children }) => {
  return (
    <>
      <div className="text-center text-white bg-red-600 text-sm py-3 capitalize">
        <p>Ea Toh Bass Trailer Hai 😉🚀</p>
      </div>
      <header className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="logo">
              <div className="image__container relative w-10 h-10 sm:w-12 sm:h-12">
                <Image src="/BELogo.svg" alt="Berozgar Engineers" fill={true} />
              </div>
            </div>
            <nav className="flex items-center">
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
                <ion-icon className="text-xl" name="chevron-forward"></ion-icon>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export default Root;
