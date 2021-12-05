import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import BottomNav from "../components/BottomNav";
import Contact from "../components/Contact";
import HomeScreen from "../components/HomeScreen";
import MyWork from "../components/MyWork";
import TopNav from "../components/TopNav";

export default function Home() {
  return (
    <div className="w-screen bg-white md:flex md:justify-center">
      <div className="w-full bg-green-200 md:w-full">
        <Head>
          <title>Rashdan's portfolio</title>
          <link rel="icon" href="/favicon.ico"></link>
        </Head>
        <TopNav />
        <HomeScreen />
        <About />
        <MyWork />
        <Contact />
        <BottomNav />
      </div>
    </div>
  );
}
