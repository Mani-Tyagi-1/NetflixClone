import React from "react";
import NetflixVideo from "../assets/videos/netflixVideo.mp4";

function TvSection() {
  return (
    <div>
      <div className="top w-full lg:h-[40rem] md:h-[44rem] h-[44rem] bg-black flex items-center justify-center lg:flex-row md:flex-col flex-col  ">
        <div className="left lg:w-[43%] text-white lg:pr-[8rem] md:pt-10 pt-10 flex flex-col md:text-center  text-center">
          <h1 className="lg:text-[3rem] md:text-[2rem]   text-[1.75rem] font-[900]">
            Enjoy on your TV
          </h1>
          <h3 className="text-[1.5rem] font-[400] text-wrap ">
            Watch on smart Tvs, PlayStation, Xbox, Chromecast, Apple TV,Blu-ray
            players and more.
          </h3>
          <h3 className="text-[1.5rem] font-[400]"></h3>
        </div>

        <div className=" h-full  top-[4rem] lg:pr-[5rem] md:pr-[8rem] pr-[1rem] lg:pt-[3rem] md:pt-[2rem] pt-[1rem]">
          <div className="absolute">
            <img
              className="relative z-[2]"
              src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            ></img>
          </div>

          <div className="w-[97%] relative lg:top-[17%] md:top-[20%] top-[18%] lg:left-[18%] md:left-[5.25rem] left-[17%] z-[1]">
            <video autoplay muted loop>
              <source src={NetflixVideo} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvSection;
