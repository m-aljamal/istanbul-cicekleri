import type { NextPage } from "next";
import Head from "next/head";
import LeftSide from "src/components/LeftSide";
import RightSide from "src/components/RightSide";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Istanbul Çiçekleri</title>
        <meta name="description" content="Istanbul Çiçekleri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="md:flex justify-between">
          <RightSide />
          <LeftSide />
        </div>
      </main>
    </div>
  );
};

export default Home;
