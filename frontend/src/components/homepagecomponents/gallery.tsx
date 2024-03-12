"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Gallery() {
  const [modalopen, setModelopen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [imageData, setImageData] = useState([{ id: 1, images: "" }]);

  function handlemodelopen(index: number) {
    setSelectedIndex(index);
    setModelopen(true);
  }
  function handlemodelclose() {
    setModelopen(false);
  }

  useEffect(() => {
    async function ColImage() {
      try {
        const response = await fetch(
          "https://horse-travel.com/gallerys/list/gallerys/",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    ColImage();
  }, []);

  return (
    <main className="mx-auto " id="gallery">
      <div className="w-full pb-[20px] lg:pb-[80px]z relative border-blue-600 bg-white border-b-[2px] ">
        <div className="text-center py-[20px]">
          <h1 className={`  text-[18px] text-blue-600 lg:text-[36px]`}>
            GALLERY
          </h1>
        </div>
        <div className="w-full h-[500px] overflow-auto flex flex-wrap justify-center items-center">
          {imageData.map((el, index) => (
            <div
              key={el.id}
              className=" h-[250px] w-[260px] overflow-y-hidden justify-center items-center"
            >
              {el.images && (
                <Image
                  src={el.images}
                  alt="#"
                  width={1080}
                  height={1000}
                  className="h-[300px]"
                  onClick={() => handlemodelopen(index)}
                />
              )}
            </div>
          ))}
        </div>
        {modalopen && (
          <div className="w-[100%] h-[100vh] lg:w-[38%] lg:h-[90vh] bg-blue-700 z-30 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] fixed flex-row justify-center items-center">
            <div
              onClick={handlemodelclose}
              className="text-[24px] text-white absolute z-40 right-[30px] cursor-pointer transform translate-x-1/2 top-[10px]"
            >
              <i className="fi fi-rr-cross  text-[20px]"></i>
            </div>
            <Swiper
              pagination={{ clickable: true }}
              className="w-full h-[100%]"
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
              }}
              initialSlide={selectedIndex !== null ? selectedIndex : 0}
            >
              {imageData.map((el) => (
                <SwiperSlide key={el.id} className=" w-full h-[100%]  ">
                  {el.images && (
                    <Image
                      src={el.images}
                      alt="#"
                      width={1080}
                      height={1000}
                      className="w-full lg:h-[100%] lg:w-[100%] h-[100%] aspect-3/2 object-contain"
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </main>
  );
}
