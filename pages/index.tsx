import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SendForm from "src/components/SendForm";
import SocialMedia from "src/components/SocialMedia";

import { useTimer } from "src/hooks/useTimer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Istanbul Çiçekleri</title>
        <meta name="description" content="Istanbul Çiçekleri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className=" flex flex-col md:flex-row justify-between  ">
          <LeftSide />
          <RightSide />
        </div>
      </main>
    </div>
  );
};

export default Home;

const RightSide = () => {
  const { finish, dayes, hours, minutes, seconds } = useTimer("11/17/2021");

  return (
    <div className="w-full mt-4 md:mt-0  flex-1 md:flex-auto  ">
      <div className=" relative h-full ">
        <Image
          src="/flowers.jpg"
          alt="flowers image"
          layout="fill"
          objectFit="cover"
          priority={true}
          className=" rounded-tr-3xl  rounded-tl-3xl   "
        />
        <div className=" absolute inset-0 bg-primary bg-opacity-75  rounded-tr-3xl  rounded-tl-3xl   "></div>
        <div className="flex h-full items-center justify-center relative">
          <div className="mx-6">
            <h2 className=" text-white text-3xl mb-3 text-center">
              Buluşmaya Kalan Süre
            </h2>
            <div className="flex space-x-4 ">
              <Circle number={dayes} text="Gün" />
              <Circle number={hours} text="Saat" />
              <Circle number={minutes} text="Dakika" />
              <Circle number={seconds} text="Saniye" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeftSide = () => {
  return (
    <div className="w-full container md:mx-6 text-center flex flex-col justify-around mt-12 md:mt-0   ">
      <div className=" relative md:h-20 h-14 ">
        <Image
          src="/logo.png"
          alt="logo"
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </div>
      <div>
        <h1 className="text-primary font-bold md:text-5xl mt-16 md:mt-0 text-2xl my-5 tracking-wide  ">
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

      <SocialMedia />
    </div>
  );
};

const Circle = ({ text, number }: { text: string; number: number }) => {
  return (
    <div className=" relative rounded-full border-white h-24 w-24 flex items-center justify-center border border-opacity-80">
      <div className="text-white">
        <p className="text-center text-2xl font-bold">{number}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
