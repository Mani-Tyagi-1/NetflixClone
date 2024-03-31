import React from "react";
import Navbar from "./Navbar";
import InputSection from "./InputSection";
import StartBtn from "./StartBtn";

function HeroSection() {
  return (
    <div
      className="lg:h-[48.5em] md:h-[45em] h-[40em]  "
      style={{
        background:
          "linear-gradient(to left,black,transparent), linear-gradient(to right,black,transparent) , url(https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_medium.jpg)",
      }}
    >
      <Navbar></Navbar>

      <div className=" h-[30rem] flex justify-center items-center">
        <div className="text-white text-center mt-[14rem] ">
          <h1 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-extrabold text-wrap">
            Unlimited movies,TV shows and more
          </h1>
          <h2 className="lg:text-[1.7rem] md:text-[1.4rem] text-[1rem]   mt-[1.5rem] text-wrap">
            Watch anywhere. Cancel Anytime.
          </h2>
          <h3 className="lg:text-[1.4rem] md:text-[1.2rem] text-[1rem] mt-[1.5rem] text-wrap">
            Ready to watch? Enter your email to create or restart your
            membership
          </h3>

          <div className="flex justify-center items-center lg:flex-row  md:flex-row flex-col mt-5 ">
            <InputSection></InputSection>
            <StartBtn></StartBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
