"use client";
import React from "react";
import localFont from "next/font/local";
import { Carousel } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getBannerImages } from "@/app/web/home";
import Loading from "@/app/loading";

const myFont = localFont({
  src: "../../styles/fonts/xingkai.ttf",
  display: "swap",
  style: "italic",
});

export default function Swiper() {
  const { data, isLoading } = useQuery<Record<string, any>>({
    queryKey: ["banner"],
    queryFn: getBannerImages,
  });

  // const arrowProps = {
  //   leftArrow: { children: <IconArrowLeft size="large" /> },
  //   rightArrow: { children: <IconArrowRight size="large" /> },
  // };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="relative">
          <Carousel autoplay arrows>
            {data &&
              data?.data?.data?.map((item, index) => {
                return (
                  <div key={index} className="w-full h-[25rem] lg:h-[40rem]">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
          </Carousel>
          <p
            className={`${myFont.className} absolute text-7xl top-1/2 left-1/2 -translate-x-1/2 z-10  text-white`}
          >
            Headerstream Photography
          </p>
        </div>
      )}
    </>
  );
}
