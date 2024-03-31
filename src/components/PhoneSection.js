import React from "react";

function PhoneSection() {
  return (
    <div>
      <div className="top w-full lg:h-[40rem] md:h-[44rem] h-[44rem] bg-black flex lg:flex-row md:flex-col flex-col items-center justify-center ">
        <div className="w-[45%] h-full right top-[4rem] pl-[6rem] pt-[3rem] z-[1] relative">
          <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"></img>
          </div>

          <div className="w-[52%] h-[10rem] relative top-[18.5rem] left-[9rem] border-2 border-gray-500 rounded-[15px] bg-black p-4 flex space-x-5">
            <div className="w-[5.4rem] ">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"></img>
            </div>
            <div className="text-white">
              <h1 className="font-bold text-[1.4rem]">Stranger Things</h1>
              <h1 className="text-blue-600">Downloading...</h1>
            </div>
          </div>
        </div>

        <div className="w-[55%] left text-white pr-[8rem] ml-15 z-[2] text-wrap">
          <h1 className="text-[3rem] font-[900]">
            Download your shows to watch offline
          </h1>
          <h3 className=" w-[90%] text-[1.5rem] font-[400]">
            Save your favourites easily and always have something to watch.
          </h3>
          {/* <h3 className="text-[1.5rem] font-[400]">
            Apple TV,Blu-ray players and more.
          </h3> */}
        </div>
      </div>
    </div>
  );
}

export default PhoneSection;
