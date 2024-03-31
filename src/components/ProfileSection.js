import React from "react"
import profile from "../assets/Profile.png";

function ProfileSection() {
  return (
    <div>
      <div className="top w-full h-[40rem] bg-black flex items-center justify-center ">
        <div className="w-[45%] h-full right top-[4rem]  pt-[3rem]">
          <div className="absolute">
            <img src={profile} />
          </div>
        </div>

        <div className="w-[45rem] left text-white pr-[8rem] ml-15">
          <h1 className="text-[3rem] font-[900]">Create profiles for kids</h1>
          <h3 className=" w-[90%] text-[1.5rem] font-[400]">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
