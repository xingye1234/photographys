"use client";
import React from "react";
import localFont from "next/font/local";
import { Carousel, Typography, Space } from "@douyinfe/semi-ui";
import { IconArrowLeft, IconArrowRight } from "@douyinfe/semi-icons";

import banners from "@/app/images/banner/banner"

const myFont = localFont({
  src: "../../styles/fonts/xingkai.ttf",
  display: "swap",
  style: "italic",
});

export default function Swiper() {
  const { Title, Paragraph } = Typography;
  const arrowProps = {
    leftArrow: { children: <IconArrowLeft size="large"/> },
    rightArrow: { children: <IconArrowRight size="large" /> },
  };

  const imgList = [
    {
      id: 1,
      img: banners.banner1,
      link: "#",
    },
    {
      id: 2,
      img: banners.banner2,
      link: "#",
    },
    {
      id: 3,
      img: banners.banner3,
      link: "#",
    },
    {
      id: 4,
      img: banners.banner4,
      link: "#",
    },
  ];

  // const logoText = ``

  return (
    <div className="relative">
      <Carousel
        className="w-full h-[25rem] lg:h-[40rem]"
        arrowProps={arrowProps}
        speed={1000}
        theme="light"
        autoPlay={true}
      >
        {imgList.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </Carousel>
      <p className={`${myFont.className} absolute text-7xl top-1/2 left-1/2 -translate-x-1/2 z-10  text-white`}>
        Headerstream Photography
      </p>
    </div>
  );
}
