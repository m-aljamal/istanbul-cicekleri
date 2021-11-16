import React from "react";
import Image from "next/image";
import { useTimer } from "src/hooks/useTimer";
import SocialMedia from "./SocialMedia";
import CircularProgressBar from "./CircularProgressBar";

const start = new Date("11/01/2021");
const end = new Date("11/25/2021");
const LeftSide = () => {
  const { dayes, hours, minutes, seconds } = useTimer(end);
  return (
    <div className="h-[550px] md:h-screen mt-8 md:mt-0 md:w-1/2 w-full ">
      <div className=" relative h-full ">
        <Image
          src="/flowers.jpg"
          alt="flowers image"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="round"
        />
        <div className=" absolute inset-0 bg-primary bg-opacity-75 round "></div>
        <div className="flex h-full items-center justify-center relative">
          <div className="mx-6">
            <h2 className=" text-white md:text-3xl text-xl mb-3 text-center">
              Buluşmaya Kalan Süre
            </h2>
            <div className="flex  gap-4 justify-center ">
              <CircularProgressBar
                start={start}
                end={end}
                number={dayes}
                text="Gün"
              />
              <CircularProgressBar
                start={start}
                end={end}
                number={hours}
                text="Saat"
              />
              <CircularProgressBar
                start={start}
                end={end}
                number={minutes}
                text="Dakika"
              />
              <CircularProgressBar
                start={start}
                end={end}
                number={seconds}
                text="Saniye"
              />
            </div>

            <div className=" absolute bottom-10 left-0 right-0 md:hidden ">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
