"use client";
import { Header } from "@/components";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PromoAbout() {
  const [imageData, setImageData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://horse-travel.com/baner/detail/baner/1/?Accept=application/json",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        const responseData = await response.json();
        setImageData(responseData[0].image);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="mx-auto">
      <Header />
      <div className="w-full relative  flex justify-center items-start">
        {imageData && (
          <Image
            src={imageData}
            width={1080}
            height={1000}
            className="w-full lg:max-h-[760px] md:max-h-[560px] max-h-[360px] object-cover"
            alt="#"
          />
        )}
        <div className="absolute top-[50%] left-[50%] z-[5] translate-x-[-50%] translate-y-[-50%]">
          <h1
            className={`sm:text-[36px] text-white  text-[18px] cursor-default text-center`}
          >
            About us
          </h1>
        </div>
      </div>
    </main>
  );
}
