import React from "react";
import Image from "next/image";
import SendForm from "./SendForm";
import SocialMedia from "./SocialMedia";
const RightSide = () => {
  return (
    <div className=" md:w-1/2 w-full pt-10 text-center container flex flex-col justify-around">
      <div className=" relative md:h-20 h-14   ">
        <Image
          src="/logo.png"
          alt="logo"
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </div>
      <div className="">
        <h1 className="text-primary font-bold md:text-5xl  text-2xl my-5 tracking-wide">
          Çok Yakında Buradayız!
        </h1>
        <p className="text-gray-700 max-w-md mx-auto text-sm md:text-base">
          Quis dolore ex enim minim qui occaecat eiusmod sit aliquip proident
          dolor ullamco.
        </p>
      </div>
      <div>
        <p className="text-gray-700 mb-5 max-w-md mx-auto text-sm md:text-base  mt-10">
          Websitemizin açılısından, yeniliklerdan, kampanyalardan haberdar olmak
          için basın bültenimize üye olabilirsiniz
        </p>

        <SendForm />
      </div>
      <div className="hidden md:inline-block">
        <SocialMedia />
      </div>
    </div>
  );
};

export default RightSide;
