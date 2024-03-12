"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FooterSection() {
  const [infoData, setInfoData] = useState<ImageData[]>([]);
  class ImageData {
    public id: number;
    public number: number;
    public email: string;
    public adress: string;
    constructor(info: ImageData) {
      this.id = info.id;
      this.number = info.number;
      this.email = info.email;
      this.adress = info.adress;
    }
  }
  useEffect(() => {
    async function InfoImage() {
      try {
        const response = await fetch("/api/footer");
        const data = await response.json();
        setInfoData(data[0].info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    InfoImage();
  }, []);
  return (
    <main className="mx-auto">
      <div className="w-full h-auto sm:h-[300px] bg-blue-600 flex flex-row justify-center sm:justify-around items-center">
        {infoData.map((el) => (
          <div
            key={el.id}
            className="p-[20px] w-full sm:w-auto flex flex-col justify-around items-start"
          >
            <h1 className={`text-[18px] pb-[20px] text-white `}>Контакты</h1>
            <div className="h-[120px] flex flex-col justify-around items-start text-white">
              <p className={`text-[14px] sm:text-[14px]`}>+996{el.number}</p>
              <p className={`text-[14px] sm:text-[14px]`}>{el.email}</p>
              <p className={`text-[14px] sm:text-[14px]`}>{el.adress}</p>
            </div>
          </div>
        ))}

        <div className="p-[20px] w-full hidden  sm:w-auto sm:flex flex-col justify-between items-end sm:items-start">
          <h1 className={`text-[18px] pb-[20px] text-white `}>
            Навигационная панель
          </h1>
          <div className="h-[120px] flex flex-col justify-around items-end sm:items-start text-white">
            <Link
              href="/"
              className={`hover:text-blue-800 duration-200 text-[14px]`}
            >
              Главная
            </Link>
            <Link
              href="/review"
              className={`hover:text-blue-800 duration-200 text-[14px]`}
            >
              Отзыв
            </Link>
            <Link
              href="/about"
              className={`hover:text-blue-800 duration-200 text-[14px]`}
            >
              О нас
            </Link>
          </div>
        </div>
        <div className="p-[20px] flex flex-col justify-between items-start">
          <h1 className={`text-[18px] pb-[20px] text-white `}>Соц сети</h1>
          <div className=" h-[80px] sm:h-[120px] flex flex-row justify-between gap-[20px] items-start text-white">
            <i className="fi fi-brands-instagram text-[14px] sm:text-[20px]"></i>
            <i className="fi fi-brands-whatsapp text-[14px] sm:text-[20px]"></i>
            <i className="fi fi-brands-facebook text-[14px] sm:text-[20px]"></i>
          </div>
        </div>
      </div>
    </main>
  );
}
