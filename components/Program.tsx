import { anim, program } from "@/data/data";
import Image from "next/image";
import {motion} from "framer-motion"

export function Program() {
  return (
        <div className="FontSHK_Dzeragir text-[#000000]">
          <h2 className="text-[32px]  tracking-[1.5%] text-center">ԺԱՄԱՆԱԿԱՑՈՒՅՑ</h2>
          <div className="relative flex flex-col gap-20">
            <Image
              src="/icon1.png"
              alt="icon1"
              width={500}
              height={500}
              className="-z-1 -left-18 absolute  "
            />
            <div className="px-5 mt-40  pt-5">
              <div className="text-start ">
                <motion.h3 {...anim} className="text-[40px]">
                  {program[0].time}
                </motion.h3>
                <motion.p
                  {...anim}
                  className=" text-[#000000] text-xl"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {program[0].title}
                </motion.p>
              </div>
              <div className="text-end mt-25 mb-7">
                <motion.h3 {...anim} className=" text-[40px]">
                  {program[1].time}
                </motion.h3>
                <motion.p
                  {...anim}
                  className=" text-[#000000] text-xl"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {program[1].title}
                </motion.p>
              </div>
              <div className="text-start mt-55">
                <motion.h3 {...anim} className=" text-[40px]">
                  {program[2].time}
                </motion.h3>
                <motion.p
                  {...anim}
                  className=" text-[#000000] text-xl"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {program[2].title}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
  );
}
