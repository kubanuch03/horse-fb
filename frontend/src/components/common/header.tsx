"use client";
import Link from "next/link";
import "@/styles/globals.css";
import { motion } from "framer-motion";

import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const [burger, setBurger] = useState(false);

  function handleopenburger() {
    setIsActive(true);
    setBurger(true);
  }
  function handlecloseburger() {
    setIsClose(true);
    setBurger(false);
  }
  return (
    <header className="mx-auto   flex items-center justify-center ">
      <div
        className={` w-full h-[80px] lg:fixed bg-blue-600 z-20 top-0 flex justify-around items-center flex-row `}
      >
        <div>
          <Link
            href="/"
            className={` m-0 text-[24px] lg:text-[32px] text-white hover:text-blue-900 duration-500`}
          >
            Horse and Travel
          </Link>
        </div>
        <div className=" hidden lg:flex flex-row items-center justify-around gap-[5px] ">
          <Link
            href="/"
            className="flex flex-col items-center text-white justify-center cursor-pointer hover:bg-white hover:text-blue-600 duration-500 px-[30px] py-12px] rounded-[18px] "
          >
            <i className="fi fi-rr-home "></i>
            <h1 className={` `}>Главная</h1>
          </Link>
          <Link
            href="/about"
            className="flex flex-col items-center  text-white justify-center cursor-pointer hover:bg-white hover:text-blue-600 duration-500 px-[30px] py-12px] rounded-[18px]"
          >
            <i className="fi fi-rr-users-alt "></i>
            <h1 className={` `}>О нас</h1>
          </Link>
          <Link
            href="/review"
            className="flex flex-col items-center text-white justify-center cursor-pointer hover:bg-white hover:text-blue-600 duration-500 px-[30px] py-12px] rounded-[18px]"
          >
            <i className="fi fi-rr-edit "></i>
            <h1 className={` `}>Отзыв</h1>
          </Link>
        </div>
        <div className={`hidden lg:flex flex-row `}>
          <div className="ml-[10px]">
            <Link
              href="/register"
              className={` lg:block px-[22px] py-[8px] text-center bg-white text-blue-400 rounded-[18px] hover:bg-blue-400 hover:text-white duration-500`}
            >
              ВХОД
            </Link>
          </div>
        </div>
        <div className="flex-block lg:hidden">
          <div
            className="lhidden w-[20px] h-[16px] flex flex-col justify-between"
            onClick={handleopenburger}
          >
            <div className="w-full h-[2px] bg-white"></div>
            <div className="w-full h-[2px] bg-white"></div>
            <div className="w-full h-[2px] bg-white"></div>
          </div>
        </div>
      </div>
      {burger && (
        <motion.div
          initial={{ left: -200 }}
          animate={{ left: isActive ? 0 : -100 }}
          exit={{ left: isClose ? 0 : -100 }}
          transition={{ duration: "0.5" }}
          className={`bottom-0 w-[180px] sm:w-[200px] h-[100vh] z-50 fixed left-0 bg-blue-800 flex-col items-center justify-around  `}
        >
          <div
            onClick={handlecloseburger}
            className="text-[18px] text-white absolute right-[50%] transform translate-x-1/2 top-[80px]"
          >
            <i className="fi fi-rr-cross"></i>
          </div>
          <div className="pt-[80%]">
            <div className="h-[200px]  flex flex-col items-center justify-around">
              <div className="flex flex-row items-center justify-center">
                <i className="fi fi-rr-home text-white"></i>
                <Link href="/" className={` text-white mx-[15px]`}>
                  Главная
                </Link>
              </div>
              <div className="flex flex-row items-center justify-center">
                <i className="fi fi-rr-users-alt text-white"></i>
                <Link href="/" className={` text-white mx-[15px]`}>
                  О нас
                </Link>
              </div>
              <div className="flex flex-row items-center justify-center">
                <i className="fi fi-rr-edit text-white"></i>
                <Link href="/review" className={` text-white mx-[15px]`}>
                  Отзыв
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-[20px] h-[150px]  flex flex-col items-center justify-around ">
            <div>
              <Link href="/register" className={` lg:block text-white`}>
                ВХОД
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
