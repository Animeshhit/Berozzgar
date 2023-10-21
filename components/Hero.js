import Image from "next/image";
import HeroImage from "@/assets/HeroImage.svg";
import Link from "next/link";
import ArrowLeftIcon from "@/assets/arrow-left.svg";
const Hero = () => {
  return (
    <>
      <div className="w-full my-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="left_content w-3/5">
              <h1
                style={{ lineHeight: "1.3" }}
                className="text-white text-6xl font-bold"
              >
                Hey,“Empowering Aspiring{" "}
                <span className="text-[#dbeab0]">Engineers”</span>
              </h1>
              <p className="mt-3 text-xl text-gray-400 capitalize">
                Unlock top-notch class notes and elevate your engineering
                journey with Berozgar Engineer. Your path to success begins
                here.
              </p>
              <Link
                href="/get-started"
                className="flex items-center mt-8 gap-2 bg-[#dbeab0] w-max py-3 px-6 rounded-full font-semibold hover:bg-white"
              >
                Let's Start
                <Image src={ArrowLeftIcon} width={30} height={20} />
              </Link>
            </div>
            <Image src={HeroImage} width={400} height={400} alt="Hero Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
