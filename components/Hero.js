import Image from "next/image";
import HeroImage from "@/assets/HeroImage2.svg";
import Link from "next/link";
import ArrowLeftIcon from "@/assets/arrow-left.svg";

const Hero = () => {
  return (
    <>
      <div className="w-full mt-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="left_content w-full md:w-1/2">
              <h1 className="text-white text-3xl font-inter sm:text-4xl md:text-6xl font-bold">
                Hey👋, “Empowering Aspiring{" "}
                <span className="text-accent">Engineers”</span>
              </h1>
              <p className="mt-3 text-gray-300 text-sm sm:text-base capitalize leading-relaxed">
                Elevate your engineering journey with study resources, expert
                advice, and motivation. Access class notes and achieve academic
                excellence. Your one-stop destination for engineering success.
              </p>
              <Link
                href="/get-started"
                className="w-max flex gap-3 mt-8 sm:mt-10 py-2.5 hover:bg-white transition rounded-full font-semibold px-12 bg-accent"
              >
                <span>Let's Start</span>
                <Image src={ArrowLeftIcon} width={30} height={30} />
              </Link>
            </div>
            <Image
              className="hidden md:block"
              src={HeroImage}
              width={500}
              height={500}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
