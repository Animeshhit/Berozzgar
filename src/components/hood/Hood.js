import { useState, useRef, useEffect } from "react";
import { BaseUrl } from "../../config/apiConfig";
import { toast } from "react-toastify";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Hood = () => {
  const [messages, setMessages] = useState(null);
  const HoodMessages = async () => {
    try {
      let APIREQ = await fetch(`${BaseUrl}/hodmessages`);
      let APIRES = await APIREQ.json();
      console.log(APIRES);
      setMessages(APIRES);
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    HoodMessages();
  }, []);
  return (
    <>
      <div className="w-full bg-zinc-800 text-white">
        <div className="text-center px-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            modules={[Autoplay]}
          >
            <SwiperSlide className="py-3 text-xs capitalize leading-relaxed">
              Created With Love ❤️ by{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/sourav-majee/"
              >
                Sourav Majee(EE-2)
              </a>{" "}
              &{" "}
              <a
                className="text-red-300"
                href="https://www.linkedin.com/in/saikat-malik-56b1a0254/"
              >
                Saikat Malik(EE-2)
              </a>{" "}
              &{" "}
              <a
                className="text-cyan-400"
                href="https://www.linkedin.com/in/animesh-kumbhakar/"
              >
                Animesh Kumbhakar(EE-1)
              </a>
            </SwiperSlide>
            {messages &&
              messages.map((msg, index) => {
                return (
                  <SwiperSlide
                    key={msg._id}
                    className="py-3 text-xs capitalize flex items-center leading-relaxed capitalize text-cyan-400"
                  >
                    {msg.message}
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hood;
