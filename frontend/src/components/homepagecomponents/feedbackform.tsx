"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import svg from "@/assets/images/feedback.img/mountains.png";
import svg_2 from "@/assets/images/feedback.img/Maps.png";

export default function FeedbackForm() {
  const [feedbackform, setFeedback] = useState([
    { id: 1, title: "", description: "" },
  ]);

  useEffect(() => {
    const Feedbackform = async () => {
      try {
        const response = await fetch(
          "https://horse-travel.com/info/list/info/",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        const data = await response.json();

        setFeedback(data);
      } catch (error) {
        console.error("Ошибка при загрузке", error);
      }
    };
    Feedbackform();
  }, []);

  const feedbackImage = [
    {
      id: 1,
      image: svg,
    },
    { id: 2, image: svg_2 },
  ];
  return (
    <main className="mx-auto ">
      <div className="w-full flex relative flex-col lg:flex-row justify-center items-center ">
        {feedbackform.map((el, index) => (
          <div
            key={index}
            className=" w-full lg:w-[50%] h-[300px] relative bg-blue-600"
          >
            <Image
              src={feedbackImage[index].image}
              alt="#"
              priority
              className=" absolute bottom-0 right-[10px] w-[180px] h-[180px] md:w-[250px] md:h-[250px]"
            />
            ;
            <div className="flex flex-col justify-center items- absolute left-[40px] top-[40%] translate-y-[-60%]">
              <h1
                className={`  text-white text-[24px] md:text-[36px] cursor-default pt-[40px] lg:pt-[80px]`}
              >
                {el.title}
              </h1>
              <p className="  text-white pr-[100px] md:pr-[180px] pb-[10px] text-[12px] md:text-[14px]">
                {el.description}
              </p>
              <Link
                href="/about"
                className={` w-[180px] px-[15px] py-[10px] bg-white text-center text-blue-600 rounded-[16px]`}
              >
                get ready
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
