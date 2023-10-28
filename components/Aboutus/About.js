import LeftArrow from "@/assets/leftArrow.svg";
import Linkdin from "@/assets/linkdin.svg";
import Insta from "@/assets/insta.svg";
import Image from "next/image";
import HeadingForSection from "../HeadingSection/HeadingForSection";

const Card = ({ Name, Desc, InstaId, LinkdinId }) => {
  return (
    <>
      <div className="card w-full text-center md:w-1/3 h-auto sm:h-64 bg-[#2c2b2b] py-12 sm:py-2 px-4 rounded-lg flex items-center jusify-center">
        <div className="w-full">
          <h2 className="text-2xl font-inter sm:text-4xl font-bold text-white">
            {Name}
          </h2>
          <p className="text-accent">{Desc}</p>
          <div className="flex items-center w-4/5 mx-auto justify-between mt-6">
            <div className="flex items-center gap-3">
              <p className="text-white">Let’s connect</p>
              <Image src={LeftArrow} width={30} height={40} />
            </div>
            <div className="flex items-center gap-3">
              <Image src={Linkdin} width={30} height={30} />
              <Image src={Insta} width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <div className="w-full py-3 my-28">
        <div className="container mx-auto px-4 ms:px-0">
          <HeadingForSection Name={"About us"} />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:mt-16 mt-12">
            <Card Name={"Sourav Majee"} Desc={"From 2nd year EE Dept."} />
            <Card Name={"Saikat Malik"} Desc={"From 2nd year EE Dept."} />
            <Card Name={"Animesh Kumbhakar"} Desc={"From 2nd year EE Dept."} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
