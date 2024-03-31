import React from "react";

function WatchSection() {
  return (
    <div>
      <div className="top w-full h-[40rem] bg-black flex items-center justify-center pt-[10px] space-x-4">
        <div className="left w-[33%] text-white ">
          <h1 className="text-[3rem] font-[900]">Watch everywhere</h1>
          <h3 className="  text-[1.5rem] font-[400]">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h3>
        </div>

        <div className="w-[30rem] h-full top-[4rem]  pt-[3rem] z-1">
          <div className="absolute">
            <img className="relative z-[2]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"></img>
          </div>

          <div className="w-[86%] relative top-[2rem] left-[7rem] z-[1]">
            <video autoplay playsinline muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchSection;
