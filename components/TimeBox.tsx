"use client";
import { anim } from "@/data/data";
import { useEffect, useState } from "react";
import {motion} from "framer-motion"


const weddingDate: any = new Date("2026-03-20T12:00:00");

export function TimeBox() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now: any = new Date();
      const diff = weddingDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          finished: false,
        });
      } else {
        setTimeLeft((prev) => ({ ...prev, finished: true }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <motion.section {...anim}   className=" flex flex-col gap-5 text-center   px-6 py-5">
      {timeLeft.finished ? (
        <div className="text-white text-2xl font-semibold px-4 bg-red-500 rounded-xl shadow">
          Միջոցառումն արդեն սկսվել է 🎉
        </div>
      ) : (
        <div className="flex justify-around text-[40px]  ">
          <TimeBoxItem
            label="Օր"
            value={timeLeft.days <= 9 ? `0${timeLeft.days}` : timeLeft.days}
          />{" "}
          |
          <TimeBoxItem
            label="Ժամ"
            value={timeLeft.hours <= 9 ? `0${timeLeft.hours}` : timeLeft.hours}
          />
          |
          <TimeBoxItem
            label="Րոպե"
            value={
              timeLeft.minutes <= 9 ? `0${timeLeft.minutes}` : timeLeft.minutes
            }
          />{" "}
          |
          <TimeBoxItem
            label="Վայրկյան"
            value={
              timeLeft.seconds <= 9 ? `0${timeLeft.seconds}` : timeLeft.seconds
            }
          />
        </div>
      )}
    </motion.section>
  );
}

const TimeBoxItem = ({ label, value }: any) => (
  <div className="px-2  text-center flex flex-col">
    <h2>{value}</h2>
    <p className="text-xl -mt-3">{label}</p>
  </div>
);
