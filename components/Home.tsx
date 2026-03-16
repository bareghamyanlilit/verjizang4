"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { Calendar } from "./Calendar";
import { Program } from "./Program";
import { useState } from "react";
import { MusicPlayer } from "./music";
import { FaMusic } from "react-icons/fa";
import { anim, txt1, txt2, txt3, txt4 } from "@/data/data";
import { motion } from "framer-motion";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 text-2xl  rounded-2xl bg-[#7d7e83af] opacity-95 text-[#000000] right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <FaMusic />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div
        className="FontArmAllegroU flex flex-col justify-between h-screen bg-cover bg-bottom  text-[#FFFFFF99] pr-10 py-20 "
        style={{ backgroundImage: "url('/img1.jpg')" }}
      >
        <p className=" text-center text-[32px]   ">
          Ավարտական <br />
          Հանդես
        </p>
        <p className=" text-end text-[32px]">
          Վերջին <br />
          Զանգ
        </p>
      </div>

      <div className="FontSHK_Dzeragir relative italic text-center py-7 bg-[##FFFF69]">
        <div className="py-12 mb-10">
          <Image
            src="/icon4.png"
            alt="icon1"
            width={500}
            height={500}
            className="w-50 absolute left-1/2  -translate-x-1/2 top-5 z-1"
          />
          <motion.h3
            {...anim}
            style={{ whiteSpace: "pre-line" }}
            className=" static z-2 text-[26px]  "
          >
            {txt1}
          </motion.h3>
        </div>
        <motion.h3 className="text-3xl px-5 tracking-[13.5%]  ">Մեր միջոցառմանը մնաց</motion.h3>
        <TimeBox />
      </div>

      <div className="px-5">
        <div className="FontSHK_Dzeragir bg-[#DBDEEA] py-7  pt-20 flex flex-col gap-5 text-center rounded-t-[150px]">
          <h2 className="text-3xl tracking-[13.5%]  ">Վերջին Զանգին</h2>
          <p className=" text-2xl tracking-[1.5%] text-[#000000] ">{txt2}</p>
        </div>
      </div>

      <p className="FontSHK_Dzeragir tracking-[7.5%] mt-15 bg-[#DBDEEA] p-7 text-xl text-center">
        {txt3}
      </p>

      <div className="FontSHK_Dzeragir text-xl p-5 grid gap-2">
        <Image
          src="/img2.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-full rounded-3xl my-10"
        />
        <motion.p
          {...anim}
          className="text-center tracking-[28%] text-2xl text-[#000000] "
        >
          Պահպանիր Օրը
        </motion.p>
        <Calendar year={2026} month={5} highlightDay={15} />
      </div>

      <Program />

      <div className="px-5 mt-20">
        <Image
          src="/img6.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-full my-7 rounded-3xl  "
        />
      </div>
       <Image
        src="/icon4.png"
        alt="icon1"
        width={500}
        height={500}
        className="w-[60%] m-auto rounded-3xl  "
      />
      <p className="FontSHK_Dzeragir tracking-[1.5%] text-2xl text-center pb-25 px-5">
        Հարգանքներով՝ <br />
        2026 թ. շրջանավարտներ
      </p>
    </div>
  );
}
