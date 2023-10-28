import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="w-full py-12">
        <div className="container mx-auto px-4 flex items-center justify-between gap-20">
          <div className="text-white flex-1">
            <h2 style={{lineHeight:1.8}} className="text-2xl font-inter sm:text-4xl md:text-6xl text-center font-bold text-gray-300 leading-relaxed">
              Build & Designed By Animesh,Fuled By Sourav & Saikat With ❤️
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
