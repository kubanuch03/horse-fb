"use client";
import { useState } from "react";
import style from "@/styles/reviews.module.css";

export default function ReviewsComponents() {
  const [formData, setFormData] = useState({
    text_review: "",
  });

  const reviewHandle = async () => {
    if (formData.text_review.trim() === "") {
      alert("Заполните поля что бы отправить");
    } else {
      try {
        const accessToken = localStorage.getItem("access_token");
        const userId = localStorage.getItem("user_id");
        const reviewData = {
          ...formData,
          user: userId,
        };

        const response = await fetch(
          "https://horse-travel.com/reviews/reviews/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(reviewData),
          }
        );

        const data = await response.json();
        if (response.ok) {
          window.location.href = "/";
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <main className="mx-auto">
      <div className="w-full pt-[80px] flex flex-row justify-center items-center">
        <div className="w-[30%] h-[90vh] border-r-[1px] border-blue-600 hidden md:flex justify-center items-center">
          <h1
            className={`text-[38px] hover:text-blue-500 duration-500  font-bold cursor-default `}
          >
            Какие у вас впечатления ?
          </h1>
        </div>
        <div className="w-[70%] h-[100%] flex flex-col justify-around items-center ">
          <div className="w-[50%] h-[30%] py-[40px] flex flex-col justify-center items-center ">
            <h1 className="text-[24px] w-[200px] md:w-auto pb-[20px] font-bold">
              Напишите отзыв
            </h1>
            <div>
              <textarea
                rows={6}
                cols={40}
                placeholder="Введите текст..."
                name="text"
                onChange={(e) => {
                  setFormData({ ...formData, text_review: e.target.value });
                }}
                value={formData.text_review}
                className={`${style.input} w-[300px] md:w-[400px] text-blue-600 px-[10px] py-[8px] outline-none rounded-[8px] border-blue-600 border-[1px] bg-transparent`}
              />
            </div>
          </div>
          <div className="w-[50%] flex flex-col pb-[20px] justify-center items-center ">
            <button
              onClick={reviewHandle}
              className="py-[10px] px-[30px] bg-transperent text-blue-600 border-blue-600 border-[1px]"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
