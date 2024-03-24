"use client";

import Syllabus from "../../../config/Syllabus";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Scrollbar } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

export default function Page({ params }) {
  const { id } = params;
  const subjects = Syllabus[params.id];

  return (
    <>
      <section>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-white capitalize text-xl sm:text-3xl font-bold flex items-center gap-3">
            <ion-icon
              style={{ color: "#0acf83" }}
              name="book-outline"
            ></ion-icon>
            {id == 1
              ? "1st sem"
              : id == 2
              ? "3rd sem"
              : id == 3
              ? "5th sem"
              : id == 4
              ? "7th sem"
              : ""}
          </h2>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            spaceBetween={40}
            modules={[Scrollbar]}
            slidesPerView={
              window.innerWidth > 950 ? 3 : window.innerWidth > 500 ? 2 : 1
            }
            className="mySwiper"
          >
            {subjects[1].Theory.map((items, index) => {
              return (
                <SwiperSlide key={index}>
                  <h3 className="text-accent text-xl font-semibold">
                    {items.SubjectName}
                  </h3>
                  <p className="text-white">{items.SubjectCode}</p>
                  <div className="bg-gray-400 w-60 h-60 rounded-full card_svg"></div>
                </SwiperSlide>
              );
            })}
            {subjects[1].Lab.map((items, index) => {
              return (
                <SwiperSlide key={index}>
                  <h3 className="text-accent text-xl font-semibold">
                    {items.SubjectName}
                  </h3>
                  <p className="text-white">{items.SubjectCode}</p>
                  <div className="bg-gray-400 w-60 h-60 rounded-full card_svg"></div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <h2 className="text-white capitalize text-xl sm:text-3xl font-bold flex items-center gap-3 mt-12">
            <ion-icon
              style={{ color: "#0acf83" }}
              name="book-outline"
            ></ion-icon>
            {id == 1
              ? "2nd sem"
              : id == 2
              ? "4th sem"
              : id == 3
              ? "6th sem"
              : id == 4
              ? "8th sem"
              : ""}
          </h2>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            spaceBetween={40}
            modules={[Scrollbar]}
            slidesPerView={
              window.innerWidth > 950 ? 3 : window.innerWidth > 500 ? 2 : 1
            }
            className="mySwiper"
          >
            {subjects[2].Theory.map((items, index) => {
              return (
                <SwiperSlide key={index}>
                  <h3 className="text-accent text-xl font-semibold">
                    {items.SubjectName}
                  </h3>
                  <p className="text-white">{items.SubjectCode}</p>
                  <div className="bg-gray-400 w-60 h-60 rounded-full card_svg"></div>
                </SwiperSlide>
              );
            })}
            {subjects[2].Lab.map((items, index) => {
              return (
                <SwiperSlide key={index}>
                  <h3 className="text-accent text-xl font-semibold">
                    {items.SubjectName}
                  </h3>
                  <p className="text-white">{items.SubjectCode}</p>
                  <div className="bg-gray-400 w-60 h-60 rounded-full card_svg"></div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
