import React from "react";
import HeroSection from "./HeroSection";
import TvSection from "./TvSection";
import PhoneSection from "./PhoneSection";
import WatchSection from "./WatchSection";
import ProfileSection from "./ProfileSection";
import FAQSection from "./FAQSection";
import Footer from './Footer'

function Home() {
  return (
    <div className=" w-full h-full ">
      <HeroSection></HeroSection>
      <div className="w-full h-[10px] bg-[rgb(35,35,35)]"></div>
      <TvSection></TvSection>
      <div className="w-full h-[10px] bg-[rgb(35,35,35)]"></div>
      <PhoneSection></PhoneSection>
      <div className="w-full h-[10px] bg-[rgb(35,35,35)]"></div>
      <WatchSection></WatchSection>
      <div className="w-full h-[10px] bg-[rgb(35,35,35)]"></div>
      <ProfileSection></ProfileSection>
      <div className="w-full h-[10px] bg-[rgb(35,35,35)]"></div>
      <FAQSection></FAQSection>
      <div className="w-full h-[10px] bg-[rgb(35,35,35)]"></div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
